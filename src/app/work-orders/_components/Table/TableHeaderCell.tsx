import { ReactNode } from "react";

export default function TableHeaderCell({ children }: { children: ReactNode }) {
  return <th className="py-2 px-4 text-left">{children}</th>;
}
