import React, { FC, ReactNode, RefObject } from "react";

type Props = {
  elementRef: RefObject<HTMLElement>;
  children: ReactNode;
};

const ScrollAnchor: FC<Props> = ({ elementRef, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!elementRef.current) return;

    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <a onClick={(e) => handleClick(e)} href="#">
      {children}
    </a>
  );
};

export default ScrollAnchor;
