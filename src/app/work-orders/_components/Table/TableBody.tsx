import { ReactNode } from "react";

export default function TableBody({ children }: { children: ReactNode }) {
  return <tbody className="text-gray-700">{children}</tbody>;
}
