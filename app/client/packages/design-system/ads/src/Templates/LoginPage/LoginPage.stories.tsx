import React from "react";
import type { StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import type { LoginPageProps } from "./LoginPage";

export default {
  title: "ADS/Templates/Login Page",
  component: LoginPage,
  decorators: [
    (Story: () => React.ReactNode) => <MemoryRouter>{Story()}</MemoryRouter>,
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A full-page login component with email and password inputs, remember me option, password recovery link, and social login support.",
      },
    },
  },
};

// Template function for defining story variants - uses bind() pattern for code reuse
const Template = (args: LoginPageProps) => <LoginPage {...args} />;

// Default state: empty form with all interactive handlers ready
export const Default = Template.bind({}) as StoryObj<LoginPageProps>;
Default.args = {
  onSubmit: (email, password, rememberMe) => {
    alert(
      `Sign in attempted with:\nEmail: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`,
    );
  },
  onForgotPassword: () => {
    alert("Redirect to forgot password page");
  },
  onSignUp: () => {
    alert("Redirect to sign up page");
  },
  onGoogleLogin: () => {
    alert("Google login initiated");
  },
  isLoading: false,
  errorMessage: "",
};

// Error state: displays validation error message below sign-up prompt
export const WithError = Template.bind({}) as StoryObj<LoginPageProps>;
WithError.args = {
  ...Default.args,
  errorMessage: "Invalid email or password. Please try again.",
};

// Loading state: sign-in button shows loading spinner while request is in progress
export const Loading = Template.bind({}) as StoryObj<LoginPageProps>;
Loading.args = {
  ...Default.args,
  isLoading: true,
};
