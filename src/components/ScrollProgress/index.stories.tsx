import React from "react";
import ScrollProgress from ".";

export default {
  component: ScrollProgress,
  title: "Components/ScrollProgress",
};

const Template = (args) => (
  <div style={{ height: "200vh" }}>
    <ScrollProgress {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  style: {
    height: "5px",
    background: "#ff0000",
  },
};
