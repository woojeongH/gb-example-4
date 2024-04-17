import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button1 from "@/ui1/Button1";

const meta = {
  title: "예제/폴더1/버튼 형태 1",
  component: Button1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isDisable: { control: "boolean" },
    color: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "#4793AF",
    isDisable: false,
  },
};
