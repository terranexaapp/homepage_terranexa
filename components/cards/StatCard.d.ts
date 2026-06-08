import * as React from "react";

/**
 * Glassy "insight" stat card floated over hero/field imagery — uppercase label,
 * large value, optional progress bar and a colored note line.
 *
 * @startingPoint section="Cards" subtitle="Glass stat card with value & progress" viewport="700x240"
 */
export interface StatCardProps {
  label: string;
  value: React.ReactNode;
  /** Small unit suffix after the value. */
  unit?: string;
  /** 0–100 progress bar; omit to hide. */
  progress?: number;
  note?: string;
  /** @default "green" */
  noteTone?: "green" | "gold";
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export function StatCard(props: StatCardProps): JSX.Element;
