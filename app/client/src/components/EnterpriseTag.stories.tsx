import React from "react";
import styled from "styled-components";
import { Tag } from "@appsmith/ads";
import type { StoryObj } from "@storybook/react";

// Recreating the component here to avoid complex path alias issues with ee/ce imports
// Using explicit color values to ensure proper display
const StyledTag = styled(Tag)`
  &&& {
    --tag-color-fg: #f22b2b;
    color: #f22b2b;
    outline: 2px solid green;
  }

  &&&& .ads-v2-text,
  &&&& span {
    color: #f22b2b !important;
  }
`;

interface EnterpriseTagProps {
  classes?: string;
  size?: "sm" | "md";
}

const EnterpriseTag = ({ classes = "", size }: EnterpriseTagProps) => {
  return (
    <StyledTag
      className={`enterprise-tag ${classes}`}
      data-testid="t--enterprise-tag"
      isClosable={false}
      kind="special"
      {...(size && { size })}
    >
      Enterprise
    </StyledTag>
  );
};

export default {
  title: "Components/EnterpriseTag",
  component: EnterpriseTag,
  parameters: {
    layout: "centered",
  },
};

const Template = (args: EnterpriseTagProps) => {
  return <EnterpriseTag {...args} />;
};

export const Default = Template.bind({}) as StoryObj;
Default.storyName = "Default";
Default.args = {};

export const SmallSize = Template.bind({}) as StoryObj;
SmallSize.storyName = "Small Size";
SmallSize.args = {
  size: "sm",
};

export const MediumSize = Template.bind({}) as StoryObj;
MediumSize.storyName = "Medium Size";
MediumSize.args = {
  size: "md",
};
