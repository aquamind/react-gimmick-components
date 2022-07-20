import React from "react";
import FadeIn from ".";

export default {
  component: FadeIn,
  title: "Components/FadeIn",
};

const Template = (args) => <FadeIn {...args} />;

const defaultArgs = {
  action: true,
  duration: 500,
  children: (
    <div style={{ height: "50vh", width: "50vw", background: "#ff0000" }} />
  ),
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Left = Template.bind({});
Left.args = {
  x: "-10%",
  ...defaultArgs,
};

export const Right = Template.bind({});
Right.args = {
  x: "10%",
  ...defaultArgs,
};

export const Up = Template.bind({});
Up.args = {
  y: "10%",
  ...defaultArgs,
};

export const Down = Template.bind({});
Down.args = {
  y: "-10%",
  ...defaultArgs,
};
