/**
 * SaltLoginPage - A login form component built with Salt Design System
 *
 * Features:
 * - Email and password validation with user-friendly error messages
 * - Password visibility toggle for accessibility
 * - Remember me checkbox for convenience
 * - Success message with auto-reset after 3 seconds
 * - Responsive design with centered card layout
 * - Links for forgot password and sign up (handlers to be implemented)
 *
 * The component manages its own form state and validation logic.
 */

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { objectKeys } from "@appsmith/utils";
import {
  SaltProvider,
  Card,
  FormField,
  FormFieldLabel,
  FormFieldHelperText,
  Input,
  Button,
  Text,
  FlexLayout,
  FlowLayout,
  Checkbox,
  Link,
} from "@salt-ds/core";
import "@salt-ds/theme/index.css";

interface FormErrors {
  email?: string;
  password?: string;
}

interface FormState {
  email: string;
  password: string;
  rememberMe: boolean;
  showPassword: boolean;
  errors: FormErrors;
  submitted: boolean;
  isSuccess: boolean;
}

/**
 * Centralized style constants for the login form
 * Using an object reduces inline style overhead and makes future updates easier
 */
const STYLES = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  } as const,
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "40px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  } as const,
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1f2937",
  } as const,
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1f2937",
    margin: "0",
  } as const,
  subheading: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0",
  } as const,
  successMessage: {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#d1fae5",
    border: "1px solid #a7f3d0",
    borderRadius: "6px",
    color: "#065f46",
    fontSize: "14px",
    textAlign: "center" as const,
  },
  fullWidth: {
    width: "100%",
  } as const,
  passwordFieldLabel: {
    width: "100%",
    marginBottom: "8px",
  } as const,
  forgotPasswordLink: {
    fontSize: "12px",
  } as const,
  showHideButton: {
    padding: "4px 8px",
    fontSize: "12px",
  } as const,
  submitButton: {
    width: "100%",
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "500",
  } as const,
  signUpText: {
    fontSize: "14px",
    color: "#6b7280",
  } as const,
} as const;

const SaltLoginPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    rememberMe: false,
    showPassword: false,
    errors: {},
    submitted: false,
    isSuccess: false,
  });

  /**
   * Validates form fields and updates error state
   * Returns true if the form is valid (no errors)
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation: check for presence and valid format
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation: check for presence only
    // (Complexity requirements should be enforced server-side)
    if (!formState.password.trim()) {
      newErrors.password = "Password is required";
    }

    setFormState((prev) => ({ ...prev, errors: newErrors }));

    return objectKeys(newErrors).length === 0;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setFormState((prev) => ({
      ...prev,
      email,
      errors: { ...prev.errors, email: undefined },
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    setFormState((prev) => ({
      ...prev,
      password,
      errors: { ...prev.errors, password: undefined },
    }));
  };

  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      rememberMe: e.target.checked,
    }));
  };

  const handleShowPasswordToggle = () => {
    setFormState((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  /**
   * Handles form submission with validation and success feedback
   * Shows a success message and auto-resets the form after 3 seconds
   * Note: In production, this should authenticate with a backend API
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        isSuccess: true,
      }));

      // Reset form after success message displays (3 second delay)
      // This allows users to see the success confirmation before the form clears
      setTimeout(() => {
        setFormState({
          email: "",
          password: "",
          rememberMe: false,
          showPassword: false,
          errors: {},
          submitted: false,
          isSuccess: false,
        });
      }, 3000);
    } else {
      // Mark as submitted to show validation errors to the user
      setFormState((prev) => ({
        ...prev,
        submitted: true,
      }));
    }
  };

  /**
   * Placeholder handler for forgot password functionality
   * To be integrated with password reset flow
   */
  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password functionality
  };

  /**
   * Placeholder handler for sign up link functionality
   * To be integrated with account creation flow
   */
  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement sign up navigation
  };

  return (
    <SaltProvider mode="light">
      <FlexLayout
        align="center"
        direction="column"
        justify="center"
        style={STYLES.container}
      >
        <Card style={STYLES.card} variant="primary">
          <FlexLayout
            align="center"
            direction="column"
            gap={4}
            justify="start"
            style={STYLES.fullWidth}
          >
            {/* Logo / Branding */}
            <Text as="div" style={STYLES.logo} styleAs="h1">
              Appsmith
            </Text>

            {/* Heading */}
            <FlexLayout
              align="center"
              direction="column"
              gap={1}
              justify="start"
            >
              <Text as="h2" style={STYLES.heading} styleAs="h2">
                Welcome back
              </Text>
              <Text style={STYLES.subheading}>Sign in to your account</Text>
            </FlexLayout>

            {/* Success Message */}
            {formState.isSuccess && (
              <div style={STYLES.successMessage}>Login successful!</div>
            )}

            {/* Email Field */}
            <FormField
              style={STYLES.fullWidth}
              validationStatus={formState.errors.email ? "error" : undefined}
            >
              <FormFieldLabel>Email address</FormFieldLabel>
              <Input
                disabled={formState.isSuccess}
                inputProps={{
                  onChange: handleEmailChange,
                  type: "email",
                }}
                placeholder="you@example.com"
                style={STYLES.fullWidth}
                value={formState.email}
              />
              {formState.errors.email && (
                <FormFieldHelperText>
                  {formState.errors.email}
                </FormFieldHelperText>
              )}
            </FormField>

            {/* Password Field with Show/Hide Toggle */}
            <FormField
              style={STYLES.fullWidth}
              validationStatus={formState.errors.password ? "error" : undefined}
            >
              <FlowLayout
                align="center"
                justify="space-between"
                style={STYLES.passwordFieldLabel}
              >
                <FormFieldLabel>Password</FormFieldLabel>
                <Link
                  href="#"
                  onClick={handleForgotPassword}
                  style={STYLES.forgotPasswordLink}
                >
                  Forgot password?
                </Link>
              </FlowLayout>
              <Input
                disabled={formState.isSuccess}
                endAdornment={
                  <Button
                    appearance="transparent"
                    disabled={formState.isSuccess}
                    onClick={handleShowPasswordToggle}
                    sentiment="neutral"
                    style={STYLES.showHideButton}
                  >
                    {formState.showPassword ? "Hide" : "Show"}
                  </Button>
                }
                inputProps={{
                  onChange: handlePasswordChange,
                  type: formState.showPassword ? "text" : "password",
                }}
                placeholder="Enter your password"
                style={STYLES.fullWidth}
                value={formState.password}
              />
              {formState.errors.password && (
                <FormFieldHelperText>
                  {formState.errors.password}
                </FormFieldHelperText>
              )}
            </FormField>

            {/* Remember Me Checkbox */}
            <Checkbox
              checked={formState.rememberMe}
              disabled={formState.isSuccess}
              label="Remember me"
              onChange={handleRememberMeChange}
            />

            {/* Sign In Button */}
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Button
                appearance="solid"
                disabled={formState.isSuccess}
                sentiment="accented"
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                type="submit"
              >
                Sign In
              </Button>
            </form>

            {/* Sign Up Link */}
            <Text style={STYLES.signUpText}>
              Don&apos;t have an account?{" "}
              <Link href="#" onClick={handleSignUp}>
                Sign up
              </Link>
            </Text>
          </FlexLayout>
        </Card>
      </FlexLayout>
    </SaltProvider>
  );
};

export default SaltLoginPage;
