import React, { FC, ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  delay: Number;
  duration: Number;
  children?: ReactNode;
};

const Splash: FC<Props> = ({ delay, duration, children }) => {
  return (
    <div
      className={styles.container}
      style={{
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
