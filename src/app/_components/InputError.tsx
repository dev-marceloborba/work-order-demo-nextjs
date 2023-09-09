import { ReactNode } from "react";

export default function InputError({ children }: { children: ReactNode }) {
  return <p className="mt-0 text-red-500 text-xs italic">{children}</p>;
}
