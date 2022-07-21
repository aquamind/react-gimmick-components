import React, {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  action?: boolean;
  duration?: number;
  delay?: number;
  scale?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Zoom: FC<Props> = ({
  action = true,
  duration = 1000,
  delay = 0,
  scale = 0,
  children,
  className,
  style,
}) => {
  const ref = useRef(null);
  const [current, setCurrent] = useState<boolean>(false);

  useEffect(() => {
    if (action === current || !ref.current) return;

    setCurrent(action);
    if (!action) return;

    const element: HTMLElement = ref.current;
    element.animate(
      [
        {
          opacity: 0,
          transform: `scale(${scale})`,
        },
        { opacity: 1, transform: "scale(1)" },
      ],
      { duration, delay, fill: "forwards" }
    );
  }, [action]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ width: "fit-content", ...style }}
    >
      {children}
    </div>
  );
};

export default Zoom;
