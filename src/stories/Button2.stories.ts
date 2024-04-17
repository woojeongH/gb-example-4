import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button2 from "@/ui1/Button2";

const meta = {
  title: "예제/폴더2/버튼 형태 2",
  component: Button2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isDisable: { control: "boolean" },
    color: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "#4793AF",
    isDisable: false,
  },
};
