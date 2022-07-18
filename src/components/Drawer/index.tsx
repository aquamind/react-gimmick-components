import React, {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styles from "./style.module.css";

type Props = {
  opened: boolean;
  duration: Number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const drawerFactory =
  (
    position: CSSProperties,
    openFrame: string,
    closeFrame: string,
    openedTransform: string,
    closedTransform: string
  ): FC<Props> =>
  ({ opened, duration, children, className, style }) => {
    const [animation, setAnimation] = useState<CSSProperties>({
      transform: closedTransform,
    });
    const [current, setCurrent] = useState<boolean>(false);

    useEffect(() => {
      if (current === opened) {
        setAnimation({
          transform: current ? openedTransform : closedTransform,
        });
        return;
      }

      setAnimation({
        animationName: opened ? openFrame : closeFrame,
        animationDuration: duration + "s",
        animationFillMode: "forwards",
      });
      setCurrent(opened);
    }, [opened]);

    return (
      <div
        className={className}
        style={{
          ...style,
          ...position,
          position: "fixed",
          ...animation,
        }}
      >
        {children}
      </div>
    );
  };

export const LeftDrawer = drawerFactory(
  { right: 0 },
  styles.LeftOpen,
  styles.LeftClose,
  "translateX(0)",
  "translateX(100%)"
);

export const RightDrawer = drawerFactory(
  { left: 0 },
  styles.RightOpen,
  styles.RightClose,
  "translateX(0)",
  "translateX(-100%)"
);

export const UpDrawer = drawerFactory(
  { bottom: 0 },
  styles.UpOpen,
  styles.UpClose,
  "translateY(0)",
  "translateY(100%)"
);

export const DownDrawer = drawerFactory(
  { top: 0 },
  styles.DownOpen,
  styles.DownClose,
  "translateY(0)",
  "translateY(-100%)"
);
