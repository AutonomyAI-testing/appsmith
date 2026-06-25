import React from "react";
import { Tag } from "./Tag";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

const meta: Meta<typeof Tag> = {
  title: "ADS/Components/Tag",
  component: Tag,
};

export default meta;

const AllKindsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
  padding: 16px;
`;

export const TagStory: StoryObj<typeof Tag> = {
  args: {
    children: "contact@appsmith.com",
    isClosable: false,
    size: "sm",
  },
};
TagStory.storyName = "Tag";

export const AllKinds: StoryObj<typeof Tag> = {
  render: () => (
    <AllKindsGrid>
      <Tag isClosable={false} kind="neutral" size="sm">
        Neutral
      </Tag>
      <Tag isClosable={false} kind="info" size="sm">
        Info
      </Tag>
      <Tag isClosable={false} kind="success" size="sm">
        Success
      </Tag>
      <Tag isClosable={false} kind="warning" size="sm">
        Warning
      </Tag>
      <Tag isClosable={false} kind="error" size="sm">
        Error
      </Tag>
      <Tag isClosable={false} kind="special" size="sm">
        Special
      </Tag>
      <Tag isClosable={false} kind="premium" size="sm">
        Premium
      </Tag>
    </AllKindsGrid>
  ),
};

export const SuccessTag: StoryObj<typeof Tag> = {
  args: {
    children: "Deployed",
    isClosable: false,
    kind: "success",
    size: "sm",
  },
};

export const ErrorTag: StoryObj<typeof Tag> = {
  args: {
    children: "Failed",
    isClosable: false,
    kind: "error",
    size: "sm",
  },
};

export const WarningTag: StoryObj<typeof Tag> = {
  args: {
    children: "Degraded",
    isClosable: false,
    kind: "warning",
    size: "sm",
  },
};

export const InfoTag: StoryObj<typeof Tag> = {
  args: {
    children: "In Progress",
    isClosable: false,
    kind: "info",
    size: "sm",
  },
};

export const SpecialTag: StoryObj<typeof Tag> = {
  args: {
    children: "Enterprise",
    isClosable: false,
    kind: "special",
    size: "sm",
  },
};

export const PremiumTag: StoryObj<typeof Tag> = {
  args: {
    children: "Business Edition",
    isClosable: false,
    kind: "premium",
    size: "sm",
  },
};

export const TagCloseStory: StoryObj<typeof Tag> = {
  args: {
    children: "contact@appsmith.com",
    isClosable: true,
    size: "sm",
  },
};
