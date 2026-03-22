import React from "react";
import type { StoryObj } from "@storybook/react";
import styled from "styled-components";
import { Tag } from "../Tag/Tag";
import type { TagSizes } from "../Tag/Tag.types";

// EnterpriseTag is a styled version of Tag with custom colors
// Recreating the component here to avoid complex path alias issues with the main app

const StyledTag = styled(Tag)`
  --tag-color-fg: #f22b2b !important;
  color: #f22b2b !important;
  outline: 2px solid blue;

  && .ads-v2-text {
    color: #f22b2b !important;
  }
`;

interface EnterpriseTagProps {
  classes?: string;
  size?: TagSizes;
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
  title: "ADS/Components/EnterpriseTag",
  component: EnterpriseTag,
  argTypes: {
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
  },
};

const Template = (args: EnterpriseTagProps) => {
  return <EnterpriseTag {...args} />;
};

export const Default = Template.bind({}) as StoryObj;
Default.args = {};

export const SmallSize = Template.bind({}) as StoryObj;
SmallSize.args = {
  size: "sm",
};

export const MediumSize = Template.bind({}) as StoryObj;
MediumSize.args = {
  size: "md",
};
