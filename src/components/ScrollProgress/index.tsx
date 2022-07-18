import React, { FC, useEffect, useState } from "react";
import useScroll from "../../hooks/use-scroll";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const ScrollProgress: FC<Props> = ({ className, style = {} }) => {
  const [width, setWidth] = useState("0%");
  const { scrollY } = useScroll();

  useEffect(() => {
    const bottom = document.body.offsetHeight - window.innerHeight;
    setWidth(((window.scrollY * 100) / bottom).toFixed(2) + "%");
  }, [scrollY]);

  return (
    <div
      className={className}
      style={{
        ...style,
        position: "fixed",
        top: "0px",
        left: "0px",
        width: width,
      }}
    />
  );
};

export default ScrollProgress;
