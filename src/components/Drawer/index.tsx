import React, { CSSProperties, FC, ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  opened: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const drawerFactory =
  (position: CSSProperties, openFrame: string, closeFrame: string): FC<Props> =>
  ({ opened, children, className, style }) => {
    const keyframes = opened ? openFrame : closeFrame;

    return (
      <div
        className={className}
        style={{
          ...style,
          ...position,
          position: "fixed",
          animationName: keyframes,
          animationDuration: "0.5s",
          animationFillMode: "forwards",
        }}
      >
        {children}
      </div>
    );
  };

export const LeftDrawer = drawerFactory(
  { right: 0 },
  styles.LeftOpen,
  styles.LeftClose
);

export const RightDrawer = drawerFactory(
  { left: 0 },
  styles.RightOpen,
  styles.RightClose
);

export const UpDrawer = drawerFactory(
  { bottom: 0 },
  styles.UpOpen,
  styles.UpClose
);

export const DownDrawer = drawerFactory(
  { top: 0 },
  styles.DownOpen,
  styles.DownClose
);
