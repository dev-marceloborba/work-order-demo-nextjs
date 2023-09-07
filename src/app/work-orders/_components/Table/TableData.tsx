import { ReactNode } from "react";

export default function TableData({ children }: { children: ReactNode }) {
  return <td className="py-2 px-4">{children}</td>;
}
