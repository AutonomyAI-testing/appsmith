import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formState.password.trim()) {
      newErrors.password = "Password is required";
    }

    setFormState((prev) => ({ ...prev, errors: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const email = e.target.value;
    setFormState((prev) => ({
      ...prev,
      email,
      errors: { ...prev.errors, email: undefined },
    }));
  };

  const handlePasswordChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const password = e.target.value;
    setFormState((prev) => ({
      ...prev,
      password,
      errors: { ...prev.errors, password: undefined },
    }));
  };

  const handleRememberMeChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        isSuccess: true,
      }));

      // Reset form after success message displays
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
      setFormState((prev) => ({
        ...prev,
        submitted: true,
      }));
    }
  };

  return (
    <SaltProvider mode="light">
      <FlexLayout
        direction="column"
        align="center"
        justify="center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <Card
          variant="primary"
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "40px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FlexLayout
            direction="column"
            gap={4}
            align="center"
            justify="start"
            style={{ width: "100%" }}
          >
            {/* Logo / Branding */}
            <Text
              as="div"
              styleAs="h1"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1f2937",
              }}
            >
              Appsmith
            </Text>

            {/* Heading */}
            <FlexLayout
              direction="column"
              gap={1}
              align="center"
              justify="start"
            >
              <Text
                as="h2"
                styleAs="h2"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0",
                }}
              >
                Welcome back
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: "0",
                }}
              >
                Sign in to your account
              </Text>
            </FlexLayout>

            {/* Success Message */}
            {formState.isSuccess && (
              <div
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "#d1fae5",
                  border: "1px solid #a7f3d0",
                  borderRadius: "6px",
                  color: "#065f46",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Login successful!
              </div>
            )}

            {/* Email Field */}
            <FormField
              validationStatus={formState.errors.email ? "error" : undefined}
              style={{ width: "100%" }}
            >
              <FormFieldLabel>Email address</FormFieldLabel>
              <Input
                placeholder="you@example.com"
                value={formState.email}
                disabled={formState.isSuccess}
                inputProps={{
                  type: "email",
                  onChange: handleEmailChange,
                }}
                style={{ width: "100%" }}
              />
              {formState.errors.email && (
                <FormFieldHelperText>
                  {formState.errors.email}
                </FormFieldHelperText>
              )}
            </FormField>

            {/* Password Field with Show/Hide Toggle */}
            <FormField
              validationStatus={formState.errors.password ? "error" : undefined}
              style={{ width: "100%" }}
            >
              <FlowLayout
                justify="space-between"
                align="center"
                style={{
                  width: "100%",
                  marginBottom: "8px",
                }}
              >
                <FormFieldLabel>Password</FormFieldLabel>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle forgot password action
                  }}
                  style={{ fontSize: "12px" }}
                >
                  Forgot password?
                </Link>
              </FlowLayout>
              <Input
                placeholder="Enter your password"
                value={formState.password}
                disabled={formState.isSuccess}
                inputProps={{
                  type: formState.showPassword ? "text" : "password",
                  onChange: handlePasswordChange,
                }}
                endAdornment={
                  <Button
                    appearance="transparent"
                    sentiment="neutral"
                    onClick={handleShowPasswordToggle}
                    disabled={formState.isSuccess}
                    style={{
                      padding: "4px 8px",
                      fontSize: "12px",
                    }}
                  >
                    {formState.showPassword ? "Hide" : "Show"}
                  </Button>
                }
                style={{ width: "100%" }}
              />
              {formState.errors.password && (
                <FormFieldHelperText>
                  {formState.errors.password}
                </FormFieldHelperText>
              )}
            </FormField>

            {/* Remember Me Checkbox */}
            <Checkbox
              label="Remember me"
              checked={formState.rememberMe}
              onChange={handleRememberMeChange}
              disabled={formState.isSuccess}
            />

            {/* Sign In Button */}
            <form
              onSubmit={handleSubmit}
              style={{ width: "100%" }}
            >
              <Button
                type="submit"
                appearance="solid"
                sentiment="accented"
                disabled={formState.isSuccess}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Sign In
              </Button>
            </form>

            {/* Sign Up Link */}
            <Text style={{ fontSize: "14px", color: "#6b7280" }}>
              Don't have an account?{" "}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle sign up navigation
                }}
              >
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
