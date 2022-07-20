import React, {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  opened: boolean;
  duration: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const drawerFactory =
  (
    position: CSSProperties,
    openedTransform: string,
    closedTransform: string
  ): FC<Props> =>
  ({ opened, duration, children, className, style }) => {
    const ref = useRef(null);
    const [current, setCurrent] = useState<boolean>(false);

    useEffect(() => {
      if (current === opened || !ref.current) return;

      const element: HTMLElement = ref.current;
      element.animate(
        [
          { transform: opened ? closedTransform : openedTransform },
          { transform: opened ? openedTransform : closedTransform },
        ],
        { duration, fill: "forwards" }
      );

      setCurrent(opened);
    }, [opened]);

    return (
      <div
        ref={ref}
        className={className}
        style={{
          width: "fit-content",
          ...style,
          ...position,
          position: "fixed",
        }}
      >
        {children}
      </div>
    );
  };

export const LeftDrawer = drawerFactory(
  { right: 0 },
  "translateX(0)",
  "translateX(100%)"
);

export const RightDrawer = drawerFactory(
  { left: 0 },
  "translateX(0)",
  "translateX(-100%)"
);

export const UpDrawer = drawerFactory(
  { bottom: 0 },
  "translateY(0)",
  "translateY(100%)"
);

export const DownDrawer = drawerFactory(
  { top: 0 },
  "translateY(0)",
  "translateY(-100%)"
);
