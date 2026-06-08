import * as React from "react";

/**
 * Uppercase, wide-tracked section kicker. The "pill" form is the hero badge
 * with a glowing dot; the "plain" form is the bare colored label above headings.
 */
export interface EyebrowProps {
  children: React.ReactNode;
  /** @default "plain" */
  variant?: "plain" | "pill";
  /** @default "green" */
  tone?: "green" | "gold";
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
