import React from "react";
import { DownShutter, LeftShutter, RightShutter, UpShutter } from ".";

export default {
  component: [RightShutter, LeftShutter, UpShutter, DownShutter],
  title: "Components/Shutter",
};

const RightShutterTemplate = (args) => <RightShutter {...args} />;
const LeftShutterTemplate = (args) => <LeftShutter {...args} />;
const UpShutterTemplate = (args) => <UpShutter {...args} />;
const DownShutterTemplate = (args) => <DownShutter {...args} />;

const defaultArgs = {
  action: true,
  duration: 500,
  style: { backgroundColor: "#0000ff" },
  children: (
    <div style={{ height: "50vh", width: "50vw", background: "#ff0000" }} />
  ),
};

export const Left = LeftShutterTemplate.bind({});
Left.args = {
  ...defaultArgs,
};

export const Right = RightShutterTemplate.bind({});
Right.args = {
  ...defaultArgs,
};

export const Up = UpShutterTemplate.bind({});
Up.args = {
  ...defaultArgs,
};

export const Down = DownShutterTemplate.bind({});
Down.args = {
  ...defaultArgs,
};
