import React from "react";
import Zoom from ".";

export default {
  component: Zoom,
  title: "Components/Zoom",
};

const Template = (args) => <Zoom {...args} />;

const defaultArgs = {
  action: true,
  duration: 500,
  children: (
    <div style={{ height: "50vh", width: "50vw", background: "#ff0000" }} />
  ),
};

export const Default = Template.bind({});
Default.args = {
  scale: 0.6,
  ...defaultArgs,
};

export const Out = Template.bind({});
Out.args = {
  scale: 1.2,
  ...defaultArgs,
};
