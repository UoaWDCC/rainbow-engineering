"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/meet-the-team", label: "Meet The Team" },
        { href: "/whats-on", label: "What's On" },
        { href: "/sign-up", label: "Sign Up" },
    ];

    return (
        <div>
            <nav className='navbar'>
                <div className='nav-links'>
                    {links.map(({ href, label }) => (
                            <Link key={href} href={href} className={`nav-links ${pathname === href ? 'active' : 'inactive'}`}>{label}</Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
