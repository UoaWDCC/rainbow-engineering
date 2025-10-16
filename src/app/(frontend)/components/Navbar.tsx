
"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Rainbow Engineering", isLogo: true },
  { href: "/events", label: "Events" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/signup", label: "Sign Up" },
];

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, hideNavBar] = useState(false);
  const [open, openDropdown] = useState(false);
  const lastScrollYRef = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <>
      <style>{`
        .navbar-desktop {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .navbar-mobile-row {
          display: none;
        }
        .rainbow-title {
          margin-left: 1rem;
          color: #5f249f;
          font-weight: bold;
          font-family: Montserrat, sans-serif;
          font-size: 1.2rem;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

    @media (min-width: 1601px){
          .navbar-desktop {
            padding: 0 15rem;
          }
        }

    @media (min-width: 1200px) and (max-width: 1600px) {
          .navbar-desktop {
            padding: 0 10rem;
          }
        }

        @media (min-width: 661px) and (max-width: 800px) {
          .rainbow-title {
            display: none;
          }
        }
        @media (max-width: 660px) {
          .navbar-desktop {
            display: none !important;
          }
          .navbar-mobile {
            display: inline-flex !important;
          }
          .navbar-mobile-row {
            display: flex !important;
            flex-direction: row;
            align-items: center;
            width: 100%;
            justify-content: flex-start;
            gap: 0.5rem;
          }
        }
        .navbar-mobile {
          display: none;
        }
      `}</style>
      <nav
        style={{
          width: "100%",
          background: "#ccb8f0",
          borderBottom: "1px solid #5f249f",
          padding: "1rem 2rem",
          position: "fixed",
          top: hidden ? "-120px" : "0",
          left: 0,
          zIndex: 100,
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          transition: "top 0.3s",
        }}
      >
        {/* Desktop nav links */}
        <div className="navbar-desktop">
          {navLinks.map(({ href, label, isLogo }) => {
            const isSignUp = label === "Sign Up";
            return (
              <Link
                key={href}
                href={href}
                style={{
                  padding: "0.25rem 0.75rem",
                  marginLeft: isSignUp ? "0.7rem" : undefined,
                  marginRight: isSignUp ? "0.7rem" : (isLogo ? "auto" : undefined),
                  borderRadius: isSignUp ? "12px" : "0px",
                  textDecoration: "none",
                  color: isSignUp ? "#f1eafb" : "#5f249f",
                  fontWeight: "bold",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1rem",
                  background: isSignUp ? "#5f249f" : "#ccb8f0",
                  border: "none",
                  boxShadow: isSignUp ? "0 2px 8px rgba(127,21,215,0.12)" : "none",
                  transition: "background 0.2s, color 0.2s, border-radius 0.2s, border 0.2s",
                  display: "flex",
                  alignItems: "center",
                  height: "40px"
                }}
              >
                {isLogo ? (
                  <>
                    <Image
                      src="/rainbow_logo_bb.png"
                      alt="Rainbow Logo"
                      width={110}
                      height={110}
                      style={{ objectFit: "contain" }}
                      priority
                    />
                    <span className="rainbow-title">
                      <span>Rainbow</span>
                      <span>Engineering</span>
                    </span>
                  </>
                ) : label}
              </Link>
            );
          })}
        </div>
        {/* Hamburger button for dropdown menu (mobile) */}
        {/* Mobile hamburger + logo row */}
        <div className="navbar-mobile-row">
          <button
            className={`hamburger ${open ? "is-open" : ""} navbar-mobile`}
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label="Toggle menu"
            onClick={() => openDropdown((s) => !s)}
            style={{ marginRight: "0.5rem" }}
          >
            <span />
            <span />
            <span />
          </button>
          {/* Rainbow Engineering button (logo) on mobile */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0.25rem 0.75rem",
              borderRadius: "12px",
              color: "#5f249f",
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              background: "#ccb8f0",
              border: "none",
              boxShadow: "none",
              transition: "background 0.2s, color 0.2s, border-radius 0.2s, border 0.2s",
              height: "60px"
            }}
          >
            <Image
              src="/rainbow_logo_bb.png"
              alt="Rainbow Logo"
              width={110}
              height={110}
              style={{ objectFit: "contain" }}
              priority
            />
            <span className="rainbow-title">
              <span>Rainbow</span>
              <span>Engineering</span>
            </span>
          </Link>
        </div>
        {/* Dropdown menu for mobile displays */}
        <div
          id="nav-mobile"
          ref={dropdownRef}
          className={`mobile-menu ${open ? "open" : ""}`}
          style={{
            display: open ? "block" : "none",
            position: "absolute",
            top: "100px",
            left: 0,
            right: 0,
            background: "#ccb8f0",
            zIndex: 101,
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navLinks.filter(link => !link.isLogo).map(({ href, label }) => (
              <li key={href} style={{ borderBottom: "1px solid #5f249f" }}>
                <Link
                  href={href}
                  onClick={() => openDropdown(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    textDecoration: "none",
                    color: "#5f249f",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.2rem",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    {/* Spacer to prevent navbar overlap */}
    <div style={{ height: "60px" }} />
  </>
  );
}