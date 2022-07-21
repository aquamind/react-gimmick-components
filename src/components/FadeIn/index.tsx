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
  x?: string;
  y?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const FadeIn: FC<Props> = ({
  action = true,
  duration = 1000,
  delay = 0,
  x = "0",
  y = "0",
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
        { opacity: 0, transform: `translate(${x}, ${y})` },
        { opacity: 1, transform: "translate(0, 0)" },
      ],
      { duration, delay, fill: "forwards" }
    );
  }, [action]);

  return (
    <div ref={ref} className={className} style={{ ...style, opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeIn;
