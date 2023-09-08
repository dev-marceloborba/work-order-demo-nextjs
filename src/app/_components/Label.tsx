import { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
} & DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export default function Label({ children, ...rest }: LabelProps) {
  return (
    <label {...rest} className="block text-gray-700 text-sm font-bold mb-2">
      {children}
    </label>
  );
}
