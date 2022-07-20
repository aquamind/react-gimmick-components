import React from "react";
import Splash from ".";

export default {
  component: Splash,
  title: "Components/Splash",
};

const Template = (args) => <Splash {...args} />;

export const Default = Template.bind({});
Default.args = {
  delay: 500,
  duration: 500,
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
