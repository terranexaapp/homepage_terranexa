import * as React from "react";

/**
 * Platform-module tile: round green icon, serif title, muted description and a
 * green "explorar" link. Hover lifts the card and reveals a corner glow.
 *
 * @startingPoint section="Cards" subtitle="Module tile with icon, title & link" viewport="700x320"
 */
export interface ModuleCardProps {
  /** Icon node (typically a 25px stroked SVG). */
  icon: React.ReactNode;
  title: string;
  description: string;
  /** @default "Explorar módulo" */
  linkLabel?: string;
  href?: string;
  style?: React.CSSProperties;
}

export function ModuleCard(props: ModuleCardProps): JSX.Element;
