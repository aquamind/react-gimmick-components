import React from "react";
import Splash from ".";

export default {
  component: Splash,
  title: "Components/Splash",
};

const Template = (args) => <Splash {...args} />;

export const Default = Template.bind({});
Default.args = {
  delay: 1,
  duration: 1,
  children: (
    <div
      style={{
        height: "50vh",
        width: "50vw",
        background: "#ff0000",
      }}
    />
  ),
};
