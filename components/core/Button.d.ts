import * as React from "react";

/**
 * Primary action control for TerraNexa. Green-gradient primary, harvest-gold
 * secondary, translucent ghost/glass on dark surfaces, and a bare link variant.
 *
 * @startingPoint section="Core" subtitle="Branded button — primary, gold, ghost, glass, link" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "gold" | "ghost" | "glass" | "link";
  /** @default "md" */
  size?: "sm" | "md";
  /** Leading icon node (SVG). */
  icon?: React.ReactNode;
  /** Trailing icon node (SVG). */
  iconRight?: React.ReactNode;
  /** Render as an anchor when set. */
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
