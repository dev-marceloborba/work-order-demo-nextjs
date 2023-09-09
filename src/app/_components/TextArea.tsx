import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import Label from "./Label";
import { twMerge } from "tailwind-merge";
import { Controller, useFormContext } from "react-hook-form";
import InputError from "./InputError";

type TextAreaProps = {
  label: string;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export default function TextArea({ label, ...props }: TextAreaProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Label>{label}</Label>
      <Controller
        name={props.name!}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            {...props}
            className={twMerge(
              props.className,
              "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
