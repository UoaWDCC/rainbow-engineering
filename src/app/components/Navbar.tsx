"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/initiatives", label: "Community & Initiatives" },
    { href: "/sponsors", label: "Sponsorships" },
    { href: "/signup", label: "Sign Up" },
  ];

    return (
        <div>
            <nav className='navbar'>
                <div className='nav-links'>
                    {links.map(({ href, label }) => (
                            <Link key={href} href={href} className={`nav-links font-[Montserrat] ${pathname === href ? 'active' : 'inactive'}`}>{label}</Link>

                    ))}
                </div>
            </nav>
        </div>
      </nav>
    </div>
  );
}
