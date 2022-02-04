import React from "react";
import styles from "./Button.module.scss";

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
      className={[styles.btn_base, styles[`btn_base__variant_${variant}`]].join(
        " "
      )}
    >
      {text}
    </button>
  );
};

export default Button;
