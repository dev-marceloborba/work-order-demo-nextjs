"use client";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Label from "./Label";
import InputError from "./InputError";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({ label, ...props }: InputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Label htmlFor={props.name}>{label}</Label>
      <Controller
        name={props.name!}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            {...props}
            className={twMerge(
              props.className,
              `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`
            )}
          />
        )}
      />
      {errors[props.name!] && (
        <InputError>{errors[props.name!]?.message?.toString()}</InputError>
      )}
    </div>
  );
}
