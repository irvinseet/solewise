"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/articles", label: "Articles" },
  { href: "/quiz", label: "Quiz" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className="logo">
        sole<span>wise</span>
      </Link>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
