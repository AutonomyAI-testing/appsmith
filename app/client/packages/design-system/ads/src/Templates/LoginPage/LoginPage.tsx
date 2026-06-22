import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Checkbox } from "../../Checkbox";
import { Divider } from "../../Divider";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { Callout } from "../../Callout";
import { Link } from "../../Link";
import { Box } from "../../Box";

export interface LoginPageProps {
  onSubmit?: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  onGoogleLogin?: () => void;
  isLoading?: boolean;
  errorMessage?: string;
  logoUrl?: string;
}

const PageBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: var(--ads-v2-color-bg-subtle);
  padding: 16px;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: var(--ads-v2-color-bg);
  box-shadow: 0px 1px 20px 0px rgba(76, 86, 100, 0.11);
  border-radius: var(--ads-v2-border-radius);
`;

// Styled logo that prominently displays the brand identity at the top of the login form
const LogoBrand = styled(Text)`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  font-weight: var(--ads-v2-font-weight-bold);
  color: var(--ads-v2-color-bg-brand);
`;

// Minimal spacing wrapper for the main heading
const HeadingContainer = styled.div`
  margin-bottom: 4px;
`;

// Container for subtitle text and sign-up link, aligned horizontally
const SubtitleContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: var(--ads-v2-spaces-1);
  align-items: center;
`;

const FormSection = styled(Flex)`
  gap: var(--ads-v2-spaces-3);
  margin-bottom: 16px;
`;

const RememberMeRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  gap: var(--ads-v2-spaces-3);
  margin-bottom: 24px;
`;

// Separator between password login and social login, with "or" text centered
const DividerContainer = styled(Flex)`
  align-items: center;
  gap: var(--ads-v2-spaces-3);
  margin: 16px 0;
`;

// Full-width divider line on either side of the "or" text
const DividerLine = styled(Divider)`
  flex: 1;
`;

const DividerText = styled(Text)`
  flex-shrink: 0;
  color: var(--ads-v2-color-fg-muted);
`;

// Bottom footer prompting users to sign up if they don't have an account
const FooterContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  gap: var(--ads-v2-spaces-2);
  margin-top: 0;
`;

const LoginPage = React.forwardRef<HTMLDivElement, LoginPageProps>(
  ({ errorMessage = "", isLoading = false, onGoogleLogin, onSubmit }, ref) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    // Handle form submission by calling the onSubmit callback with form state
    // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit?.(email, password, rememberMe);
    };

    return (
      <PageBackground ref={ref}>
        <LoginCard>
          {/* Logo/Brand */}
          <LogoBrand kind="heading-l" renderAs="div">
            appsmith_
          </LogoBrand>

          {/* Heading */}
          <HeadingContainer>
            <Text kind="heading-m" renderAs="h1">
              Sign in to Appsmith
            </Text>
          </HeadingContainer>

          {/* Subtitle with Sign Up Link */}
          <SubtitleContainer>
            <Text kind="body-s" renderAs="span">
              New to Appsmith?
            </Text>
            <Link kind="primary" to="/sign-up">
              Sign up
            </Link>
          </SubtitleContainer>

          {/* Display error message if present */}
          {errorMessage && (
            <Box marginBottom="spaces-4">
              <Callout kind="error">{errorMessage}</Callout>
            </Box>
          )}

          {/* Form */}
          <form onSubmit={handleFormSubmit}>
            <FormSection flexDirection="column">
              {/* Email Input */}
              <Input
                isRequired
                label="Email address"
                onChange={setEmail}
                placeholder="your@email.com"
                size="md"
                type="email"
                value={email}
              />

              {/* Password Input */}
              <Input
                isRequired
                label="Password"
                onChange={setPassword}
                placeholder="••••••••"
                size="md"
                type="password"
                value={password}
              />

              {/* Remember Me & Forgot Password */}
              <RememberMeRow>
                <Checkbox isSelected={rememberMe} onChange={setRememberMe}>
                  Remember me
                </Checkbox>
                <Link kind="secondary" to="/forgot-password">
                  Forgot password?
                </Link>
              </RememberMeRow>

              {/* Submit Button */}
              <Button
                UNSAFE_width="100%"
                isLoading={isLoading}
                kind="primary"
                size="md"
                type="submit"
              >
                Sign in
              </Button>
            </FormSection>
          </form>

          {/* Divider with "or" */}
          <DividerContainer>
            <DividerLine orientation="horizontal" />
            <DividerText kind="body-s">or</DividerText>
            <DividerLine orientation="horizontal" />
          </DividerContainer>

          {/* Google Login Button */}
          <Box marginBottom="spaces-4">
            <Button
              UNSAFE_width="100%"
              kind="secondary"
              onClick={onGoogleLogin}
              size="md"
              startIcon="google-fill"
            >
              Continue with Google
            </Button>
          </Box>

          {/* Sign Up Footer */}
          <FooterContainer>
            <Text kind="body-s" renderAs="span">
              Don&apos;t have an account?
            </Text>
            <Link kind="primary" to="/sign-up">
              Sign up
            </Link>
          </FooterContainer>
        </LoginCard>
      </PageBackground>
    );
  },
);

LoginPage.displayName = "LoginPage";

export { LoginPage };
