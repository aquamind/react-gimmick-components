import React, { FC, useEffect, useState } from "react";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const ScrollProgress: FC<Props> = ({ className, style = {} }) => {
  const [width, setWidth] = useState("0%");
  const handleScroll = () => {
    const bottom = document.body.offsetHeight - window.innerHeight;
    setWidth(((window.scrollY * 100) / bottom).toFixed(2) + "%");
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
