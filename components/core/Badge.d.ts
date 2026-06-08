import * as React from "react";

/**
 * Small status / category pill. Five tints tuned for dark TerraNexa surfaces.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "green" */
  tone?: "green" | "gold" | "danger" | "info" | "neutral";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
