import { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-bold pb-2">{children}</h2>;
}
