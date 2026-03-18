import React from "react";
import styled from "styled-components";
import type { TagSizes } from "@appsmith/ads";
import { Tag } from "@appsmith/ads";
import { ENTERPRISE_TAG, createMessage } from "ee/constants/messages";

const StyledTag = styled(Tag)`
  --tag-color-fg: var(--ads-v2-color-fg-error);
  color: var(--ads-v2-color-fg-error);
`;

const EnterpriseTag = ({
  classes = "",
  size,
}: {
  classes?: string;
  size?: TagSizes;
}) => {
  return (
    <StyledTag
      className={`enterprise-tag ${classes}`}
      data-testid="t--enterprise-tag"
      isClosable={false}
      kind="special"
      {...(size && { size })}
    >
      {createMessage(ENTERPRISE_TAG)}
    </StyledTag>
  );
};

export default EnterpriseTag;
