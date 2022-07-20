import React from "react";
import { HorizontalFlip, VerticalFlip } from ".";

export default {
  component: [VerticalFlip, HorizontalFlip],
  title: "Components/Flip",
};

const VerticalFlipTemplate = (args) => <VerticalFlip {...args} />;
const HorizontalFlipTemplate = (args) => <HorizontalFlip {...args} />;

const defaultArgs = {
  action: true,
  duration: 500,
  children: (
    <div style={{ height: "50vh", width: "50vw", background: "#ff0000" }} />
  ),
};

export const Front = HorizontalFlipTemplate.bind({});
Front.args = {
  perspective: "1000px",
  rotate: "-100deg",
  ...defaultArgs,
};

export const Back = HorizontalFlipTemplate.bind({});
Back.args = {
  perspective: "1000px",
  rotate: "100deg",
  ...defaultArgs,
};

export const Up = VerticalFlipTemplate.bind({});
Up.args = {
  perspective: "1000px",
  rotate: "-100deg",
  ...defaultArgs,
};

export const Down = VerticalFlipTemplate.bind({});
Down.args = {
  perspective: "1000px",
  rotate: "100deg",
  ...defaultArgs,
};
