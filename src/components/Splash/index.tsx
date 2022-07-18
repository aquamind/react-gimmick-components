import React, { CSSProperties, FC, ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  delay: Number;
  duration: Number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const Splash: FC<Props> = ({ delay, duration, className, style, children }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        animationName: styles.fadeOut,
        animationDelay: delay + "s",
        animationDuration: duration + "s",
        animationFillMode: "forwards",
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
