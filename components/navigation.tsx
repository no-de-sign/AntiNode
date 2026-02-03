"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
    const pathname = usePathname();

    const links = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/apps", label: "Apps" },
        { href: "/usage", label: "Usage" },
    ];

    return (
        <header className="border-b border-zinc-800 bg-zinc-950">
            <div className="flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Antinode
                </Link>
                <nav className="flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm transition-colors hover:text-white ${pathname === link.href
                                    ? "font-medium text-white"
                                    : "text-zinc-400"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
