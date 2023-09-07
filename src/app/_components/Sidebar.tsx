"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/dashboard",
    name: "Dashboard",
  },
  {
    href: "/work-orders",
    name: "Ordens de serviço",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white">
      <nav className="mt-10">
        <ul>
          {links.map(({ name, href }, index) => {
            const isActive = pathname == href;
            return (
              <li className="mb-4" key={index}>
                <Link
                  href={href}
                  className={`block px-4 py-2 hover:bg-gray-600 rounded-lg ${
                    isActive ? "text-white bg-gray-600" : "text-gray-300"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
