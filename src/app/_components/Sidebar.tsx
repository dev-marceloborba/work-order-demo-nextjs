import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white">
      <nav className="mt-10">
        <ul>
          <li className="mb-4">
            <Link
              href="/dashboard"
              className="block px-4 py-2 hover:bg-gray-600 rounded-lg"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/work-orders"
              className="block px-4 py-2 hover:bg-gray-600 rounded-lg"
            >
              Ordens de serviço
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
