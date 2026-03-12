import React from "react";
import { Avatar } from "@appsmith/ads";
import styled from "styled-components";

const GradientAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background-color: var(--ads-v2-color-bg);
  padding: var(--ads-v2-spaces-7);
`;

export default function GradientAvatar() {
  return (
    <GradientAvatarContainer>
      <Avatar
        hasGradientBorder
        image="https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
        label="User Avatar"
        size="lg"
      />
    </GradientAvatarContainer>
  );
}
