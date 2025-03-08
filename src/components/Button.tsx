"use client";
import React from "react";
import { useFormStatus } from "react-dom";
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  cls: string;
}

const Button = ({ onClick, children, cls }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} onClick={onClick} className={cls}>
      {children}
    </button>
  );
};
export default Button;
