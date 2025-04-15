"use client";
import React from "react";
import { useFormStatus } from "react-dom";
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  cls?: string;
  dataCy?: string; // data-cy attribute for cypress tests
}

const Button = ({ onClick, children, cls, dataCy }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      onClick={onClick}
      className={cls}
      data-cy={dataCy ? dataCy : ""}
    >
      {children}
    </button>
  );
};
export default Button;
