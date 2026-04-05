import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

// Mock the imports that EnterpriseTag uses
const ENTERPRISE_TAG = () => "Enterprise";
const createMessage = (fn: () => string) => fn();

// Mock Tag component that mirrors @appsmith/ads Tag behavior
interface MockTagProps {
  children: React.ReactNode;
  className?: string;
  isClosable?: boolean;
  kind?: string;
  size?: "sm" | "md";
  "data-testid"?: string;
}

const MockTag = styled.span<{ size?: "sm" | "md" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.size === "sm" ? "2px 6px" : "4px 8px")};
  font-size: ${(props) => (props.size === "sm" ? "11px" : "12px")};
  font-weight: 600;
  border-radius: 4px;
  background-color: #fef3f2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

// Recreate the StyledTag with the modified styles from the task:
// - outline: 2px solid green (inner outline, directly around the element)
// - box-shadow: 0 0 0 4px blue (outer outline, around the green outline)
// The box-shadow spread of 4px ensures it extends past the 2px outline
// Creating: element -> green outline (2px) -> blue box-shadow (additional 2px outside)
const StyledTag = styled(MockTag)`
  --tag-color-fg: var(--ads-v2-color-fg-error);
  color: var(--ads-v2-color-fg-error, #d92d20);
  box-shadow: 0 0 0 2px green, 0 0 0 4px blue;
`;

// Create a mock EnterpriseTag component for the story
const EnterpriseTag = ({
  classes = "",
  size,
}: {
  classes?: string;
  size?: "sm" | "md";
}) => {
  return (
    <StyledTag
      className={`enterprise-tag ${classes}`}
      data-testid="t--enterprise-tag"
      size={size}
    >
      {createMessage(ENTERPRISE_TAG)}
    </StyledTag>
  );
};

const meta: Meta<typeof EnterpriseTag> = {
  title: "Components/EnterpriseTag",
  component: EnterpriseTag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Size of the tag",
    },
    classes: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EnterpriseTag>;

export const Default: Story = {
  args: {},
};

export const SmallSize: Story = {
  args: {
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    size: "md",
  },
};
