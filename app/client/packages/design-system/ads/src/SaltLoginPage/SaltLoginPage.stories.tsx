import React from "react";
import type { StoryObj } from "@storybook/react";
import SaltLoginPage from "./SaltLoginPage";

export default {
  title: "ADS/Pages/Salt Login Page",
  component: SaltLoginPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default: StoryObj = {
  render: () => <SaltLoginPage />,
};
