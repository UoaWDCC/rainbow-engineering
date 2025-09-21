"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, hideNavBar] = useState(false);
  const lastScrollYRef = useRef(0);
  const [open, openDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/initiatives", label: "Community & Initiatives" },
    { href: "/sponsors", label: "Sponsorships" },
    { href: "/signup", label: "Sign Up" },
  ];

  // hides navbar when going down the page, shows navbar when going up the page
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollYRef.current);
      if (currentScrollY > lastScrollYRef.current && scrollDifference > 10) {
        openDropdown(false);
        hideNavBar(true);
      } else if (currentScrollY <= lastScrollYRef.current) {
        hideNavBar(false);
      }
      lastScrollYRef.current = currentScrollY;
    }
    function handleArrowKeyMovement(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        openDropdown(false);
        hideNavBar(true);
      } else if (e.key === "ArrowUp") {
        hideNavBar(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleArrowKeyMovement);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleArrowKeyMovement);
    }
  }, []);

  // closes dropdown menu when new page is loaded
  useEffect(() => openDropdown(false), [pathname]);

  // closes dropdown menu when action is undone
  useEffect(() => {
    function closeDropdownOnEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        openDropdown(false);
      }
    }
    function closeDropdownOnOutsideClick(e: MouseEvent) {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        openDropdown(false);
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
            <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
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
                onClick={() => openDropdown((s) => !s)}
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
                        <Link href={href} onClick={() => openDropdown(false)} className={pathname === href ? 'active' : 'inactive'}>
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