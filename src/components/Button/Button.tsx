import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "default" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: ButtonVariant;
  text: string;
}

const Button = (props: ButtonProps) => {
  const { children, loading, variant = "default", text, ...rest } = props;

  return (
    <button
      {...rest}
      className={[styles.base_style, styles[`variant__${variant}`]].join(" ")}
    >
      {text}
    </button>
  );
};

export default Button;
