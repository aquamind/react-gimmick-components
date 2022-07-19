import { ComponentStory } from "@storybook/react";
import React from "react";
import { DownDrawer, LeftDrawer, RightDrawer, UpDrawer } from ".";

export default {
  component: [LeftDrawer, RightDrawer, UpDrawer, DownDrawer],
  title: "Components/Drawer",
};

const LeftTemplate: ComponentStory<typeof LeftDrawer> = (args) => (
  <LeftDrawer {...args} />
);
const RightTemplate: ComponentStory<typeof RightDrawer> = (args) => (
  <RightDrawer {...args} />
);
const UpTemplate: ComponentStory<typeof UpDrawer> = (args) => (
  <UpDrawer {...args} />
);
const DownTemplate: ComponentStory<typeof DownDrawer> = (args) => (
  <DownDrawer {...args} />
);

const defaultArgs = {
  opened: true,
  duration: 500,
  children: (
    <div style={{ height: "50vh", width: "50vw", background: "#ff0000" }} />
  ),
};

export const Left = LeftTemplate.bind({});
Left.args = defaultArgs;

export const Right = RightTemplate.bind({});
Right.args = defaultArgs;

export const Up = UpTemplate.bind({});
Up.args = defaultArgs;

export const Down = DownTemplate.bind({});
Down.args = defaultArgs;
