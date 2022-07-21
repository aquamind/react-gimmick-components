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
  perspective?: string;
  rotate?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const flipFactory =
  (pivot: "X" | "Y"): FC<Props> =>
  ({
    action = true,
    duration = 1000,
    delay = 0,
    perspective = "none",
    rotate = "0",
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
            transform: `perspective(${perspective}) rotate${pivot}(${rotate})`,
          },
          { transform: `perspective(none) rotate${pivot}(0)` },
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

export const VerticalFlip = flipFactory("X");
export const HorizontalFlip = flipFactory("Y");
