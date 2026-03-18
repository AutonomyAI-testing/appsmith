import React from "react";
import type { TagSizes } from "@appsmith/ads";
import { Tag } from "@appsmith/ads";
import { BUSINESS_TAG, ENTERPRISE_TAG, createMessage } from "ee/constants/messages";

type PlanType = "business" | "enterprise";

const PLAN_CONFIG: Record<
  PlanType,
  {
    kind: "premium" | "special";
    message: () => string;
    className: string;
    testId: string;
  }
> = {
  business: {
    kind: "premium",
    message: BUSINESS_TAG,
    className: "business-tag",
    testId: "t--business-tag",
  },
  enterprise: {
    kind: "special",
    message: ENTERPRISE_TAG,
    className: "enterprise-tag",
    testId: "t--enterprise-tag",
  },
};

const PlanTag = ({
  classes = "",
  plan = "business",
  size,
  ...rest
}: {
  classes?: string;
  plan?: PlanType;
  size?: TagSizes;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const config = PLAN_CONFIG[plan];

  return (
    <Tag
      className={`${config.className} ${classes}`}
      data-testid={config.testId}
      isClosable={false}
      kind={config.kind}
      {...(size && { size })}
      {...rest}
    >
      {createMessage(config.message)}
    </Tag>
  );
};

export default PlanTag;
