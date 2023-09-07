"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  color?: "primary" | "danger";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  children,
  color = "primary",
  ...props
}: ButtonProps) {
  const getColor = () => {
    switch (color) {
      case "primary":
        return "blue";
      case "danger":
        return "red";
    }
  };

  return (
    <button
      {...props}
      className={twMerge(
        `text-white font-bold py-1 px-2 mr-2 rounded bg-${getColor()}-500 hover:bg-${getColor()}-700`,
        props.className
      )}
    >
      {children}
    </button>
  );
}
