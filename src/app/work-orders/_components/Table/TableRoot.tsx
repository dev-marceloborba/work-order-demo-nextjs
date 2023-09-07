import { ReactNode } from "react";

export default function TableRoot({ children }: { children: ReactNode }) {
  return <table className="min-w-full border-collapse">{children}</table>;
}
