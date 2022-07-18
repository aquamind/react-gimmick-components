import React, { useRef } from "react";
import ScrollAnchor from ".";

export default {
  component: ScrollAnchor,
  title: "Components/ScrollAnchor",
};

const Template = () => {
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  return (
    <div>
      <ScrollAnchor elementRef={a}>A</ScrollAnchor>
      <ScrollAnchor elementRef={b}>B</ScrollAnchor>

      <div ref={a} style={{ height: "100vh" }}>
        A
      </div>
      <div ref={b} style={{ height: "100vh" }}>
        B
      </div>
    </div>
  );
};

export const Default = Template.bind({});
