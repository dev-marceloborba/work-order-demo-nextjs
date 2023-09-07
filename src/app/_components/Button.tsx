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
        return "bg-blue-500 hover:bg-blue-700";
      case "danger":
        return "bg-red-500 hover:bg-red-700";
    }
  };

  return (
    <button
      {...props}
      className={twMerge(
        `text-white font-bold py-1 px-2 mr-2 rounded ${getColor()}`,
        props.className
      )}
    >
      {children}
    </button>
  );
}
