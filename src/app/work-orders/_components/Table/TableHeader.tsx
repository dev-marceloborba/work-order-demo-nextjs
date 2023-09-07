import { ReactNode } from "react";

export default function TableHeader({ children }: { children: ReactNode }) {
  return <thead className="bg-gray-800 text-white">{children}</thead>;
}
