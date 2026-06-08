import * as React from "react";

/**
 * Labeled text field for dark TerraNexa forms — translucent fill, hairline
 * border, green focus ring. Forwards all native input attributes.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  type?: string;
}

export function Input(props: InputProps): JSX.Element;
