import * as React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Labeled dropdown matching Input, with a green chevron. Options accept
 * plain strings or { value, label } objects.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Array<string | SelectOption>;
  /** Disabled placeholder shown first. */
  placeholder?: string;
}

export function Select(props: SelectProps): JSX.Element;
