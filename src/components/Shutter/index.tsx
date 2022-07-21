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
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const shutterFactory =
  (
    startOrigin: "left" | "right" | "top" | "bottom",
    endOrigin: "left" | "right" | "top" | "bottom",
    pivot: "X" | "Y"
  ): FC<Props> =>
  ({
    action = true,
    duration = 1000,
    delay = 0,
    children,
    className,
    style,
  }) => {
    const shutterRef = useRef(null);
    const wrapperRef = useRef(null);
    const [current, setCurrent] = useState<boolean>(false);

    useEffect(() => {
      if (action === current || !shutterRef.current || !wrapperRef.current)
        return;

      setCurrent(action);
      if (!action) return;

      const element: HTMLElement = shutterRef.current;
      element.animate(
        [
          {
            transformOrigin: startOrigin,
            transform: `scale${pivot}(0)`,
            offset: 0,
          },
          {
            transformOrigin: startOrigin,
            transform: `scale${pivot}(1)`,
            offset: 0.5,
          },
          {
            transformOrigin: endOrigin,
            transform: `scale${pivot}(1)`,
            offset: 0.51,
          },
          {
            transformOrigin: endOrigin,
            transform: `scale${pivot}(0)`,
            offset: 1,
          },
        ],
        { duration, delay, fill: "forwards" }
      );
      const wrapper: HTMLElement = wrapperRef.current;
      wrapper.animate(
        [
          {
            opacity: 0,
            offset: 0,
          },
          {
            opacity: 0,
            offset: 0.5,
          },
          {
            opacity: 0,
            offset: 0.51,
          },
          {
            opacity: 1,
            offset: 1,
          },
        ],
        { duration, delay, fill: "forwards" }
      );
    }, [action]);

    return (
      <div style={{ position: "relative", width: "fit-content" }}>
        <div
          ref={shutterRef}
          className={className}
          style={{
            ...style,
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <div ref={wrapperRef} style={{ width: "fit-content" }}>
          {children}
        </div>
      </div>
    );
  };

export const RightShutter = shutterFactory("left", "right", "X");
export const LeftShutter = shutterFactory("right", "left", "X");
export const UpShutter = shutterFactory("bottom", "top", "Y");
export const DownShutter = shutterFactory("top", "bottom", "Y");
