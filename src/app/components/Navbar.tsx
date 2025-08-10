"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/initiatives", label: "Community & Initiatives" },
    { href: "/sponsors", label: "Sponsorships" },
    { href: "/signup", label: "Sign Up" },
  ];

  // closes dropdown menu when new page is loaded
  useEffect(() => setOpen(false), [pathname]);

  // closes dropdown menu when action is undone
  useEffect(() => {
    function closeDropdownOnEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    function closeDropdownOnOutsideClick(e: MouseEvent) {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", closeDropdownOnEscape);
    document.addEventListener("click", closeDropdownOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeDropdownOnEscape);
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, [open]);

    return (
        <div>
            <nav className='navbar'>
              {/* Tabs menu for desktop displays */}
              <div className='nav-links-desktop'>
                  {links.map(({ href, label }) => (
                    <Link key={href} href={href} className={`nav-links font-[Montserrat] ${pathname === href ? 'active' : 'inactive'}`}>
                      {label}
                    </Link>
                  ))}
              </div>

              {/* Hamburger button for dropdown menu */}
              <button
                className={`hamburger ${open ? "is-open": ""}`}
                aria-expanded={open}
                aria-controls='nav-mobile'
                aria-label='Toggle menu'
                onClick={() => setOpen((s) => !s)}
              >
                <span />
                <span />
                <span />
              </button>

              {/* Dropdown menu for mobile displays */}
              <div id='nav-mobile' ref={dropdownRef} className={`mobile-menu ${open ? 'open' : ''}`}>
                  <ul>
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <Link href={href} onClick={() => setOpen(false)} className={pathname === href ? 'active' : 'inactive'}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
              </div>
            </nav>
        </div>
  );
}