import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button",
};

export const Outline = Template.bind({});
Outline.args = {
  text: "Button",
  variant: "outline"
};
