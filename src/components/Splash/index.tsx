import React, { CSSProperties, FC, ReactNode, useEffect, useRef } from "react";

type Props = {
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const Splash: FC<Props> = ({
  delay = 0,
  duration = 1000,
  className,
  style,
  children,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;

    const element: HTMLElement = ref.current;
    element.animate(
      [{ opacity: 1 }, { opacity: 0, display: "none", zIndex: -1 }],
      { duration, delay, fill: "forwards" }
    );
  }, [ref]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Splash;
