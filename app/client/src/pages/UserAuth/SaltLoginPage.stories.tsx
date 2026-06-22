import type { Meta, StoryObj } from "@storybook/react-vite";
import SaltLoginPage from "./SaltLoginPage";

const meta: Meta<typeof SaltLoginPage> = {
  title: "Pages/UserAuth/SaltLoginPage",
  component: SaltLoginPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SaltLoginPage>;

export const Default: Story = {};
