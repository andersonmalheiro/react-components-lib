import React from "react";
import { StyledComponent } from "styled-components";
import { VariantDefault, VariantOutline } from "./Button.styles";

type StyledVariant = StyledComponent<"button", any, {}, never>;

type ButtonVariant = "default" | "outline";

const variants: Record<ButtonVariant, StyledVariant> = {
  default: VariantDefault,
  outline: VariantOutline,
};

const getVariant = (variantName: ButtonVariant) => variants[variantName];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: ButtonVariant;
}

const Button = (props: ButtonProps) => {
  const { children, loading, variant, ...rest } = props;
  const ButtonVariant = variant ? getVariant(variant) : variants.default;

  return <ButtonVariant {...rest}>{children}</ButtonVariant>;
};

export default Button;