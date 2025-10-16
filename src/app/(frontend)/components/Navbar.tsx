
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
  // Dark mode state - true = dark mode, false = light mode
  const [isDark, setIsDark] = useState(false);
  const lastScrollYRef = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDark(true);
      // Apply dark mode to body
      document.body.style.backgroundColor = "#121022";
      document.body.style.color = "#F4EFFF";
    }
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    // Save preference to localStorage
    localStorage.setItem("darkMode", String(newMode));
    // Apply body colors
    if (newMode) {
      document.body.style.backgroundColor = "#121022"; // Dark background
      document.body.style.color = "#F4EFFF"; // Dark mode text
    } else {
      document.body.style.backgroundColor = "#f1eafb"; // Light background
      document.body.style.color = "#171717"; // Light mode text
    }
  };

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
                    <Image
                      src="/rainbow_logo_bb.png"
                      alt="Rainbow Logo"
                      width={110}
                      height={110}
                      style={{ objectFit: "contain" }}
                      priority
                    />
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .navbar-mobile-row {
          display: none;
        }
        @media (max-width: 640px) {
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
          // Dark mode: #1C1730 (panel background), Light mode: #ccb8f0 (light purple)
          background: isDark ? "#1C1730" : "#ccb8f0",
          // Dark mode: #3D3463 (border/divider), Light mode: #5f249f (purple)
          borderBottom: isDark ? "1px solid #3D3463" : "1px solid #5f249f",
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
          // Smooth transitions for position and color changes
          transition: "top 0.3s, background 0.2s, border-color 0.2s",
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
                  marginLeft: isSignUp ? "0.75rem" : undefined,
                  marginRight: isSignUp ? "0.75rem" : undefined,
                  borderRadius: isSignUp ? "12px" : "0px",
                  textDecoration: "none",
                  // Sign Up button text: always light, Regular links: dark mode = #F4EFFF (main text), light = #5f249f (purple)
                  color: isSignUp ? "#f1eafb" : (isDark ? "#F4EFFF" : "#5f249f"),
                  fontWeight: "bold",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.5rem",
                  // Sign Up button bg: dark mode = #7E57C2 (button), light = #5f249f, Regular links match navbar bg
                  background: isSignUp ? (isDark ? "#7E57C2" : "#5f249f") : (isDark ? "#1C1730" : "#ccb8f0"),
                  border: "none",
                  boxShadow: isSignUp ? "0 2px 8px rgba(127,21,215,0.12)" : "none",
                  transition: "background 0.2s, color 0.2s, border-radius 0.2s, border 0.2s",
                  display: "flex",
                  alignItems: "center",
                  height: "60px"
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
                    <span style={{
                      marginLeft: "1rem",
                      // Logo text color: dark mode = #F4EFFF (main text), light = #5f249f (purple)
                      color: isDark ? "#F4EFFF" : "#5f249f",
                      fontWeight: "bold",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: 1.1
                    }}>
                      <span>Rainbow</span>
                      <span>Engineering</span>
                    </span>
                  </>
                ) : label}
              </Link>
            );
          })}
          {/* Theme toggle button - switches between light and dark mode */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            style={{
              padding: "0.5rem",
              marginLeft: "0.5rem",
              borderRadius: "12px",
              // Button background: dark mode = #7E57C2 (button), light = #5f249f (purple)
              background: isDark ? "#7E57C2" : "#5f249f",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              boxShadow: "0 2px 8px rgba(127,21,215,0.12)",
              // Smooth transitions for hover and color changes
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* Show sun icon in dark mode, moon icon in light mode */}
            {isDark ? (
              // Sun icon - indicates clicking will switch to light mode
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4EFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon icon - indicates clicking will switch to dark mode
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f1eafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
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
              // Mobile logo text: dark mode = #F4EFFF (main text), light = #5f249f (purple)
              color: isDark ? "#F4EFFF" : "#5f249f",
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.5rem",
              // Mobile logo background matches navbar
              background: isDark ? "#1C1730" : "#ccb8f0",
              border: "none",
              boxShadow: "none",
              transition: "background 0.2s, color 0.2s, border-radius 0.2s, border 0.2s",
              height: "60px",
              flex: 1
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
            <span style={{
              marginLeft: "1rem",
              // Mobile logo span text: dark mode = #F4EFFF, light = #5f249f
              color: isDark ? "#F4EFFF" : "#5f249f",
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.5rem",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1
            }}>
              <span>Rainbow</span>
              <span>Engineering</span>
            </span>
          </Link>
          {/* Theme toggle button (mobile) - same functionality as desktop */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="navbar-mobile"
            style={{
              padding: "0.5rem",
              marginLeft: "0.5rem",
              borderRadius: "12px",
              // Mobile button background: dark mode = #7E57C2, light = #5f249f
              background: isDark ? "#7E57C2" : "#5f249f",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              boxShadow: "0 2px 8px rgba(127,21,215,0.12)",
              transition: "transform 0.2s, background 0.2s",
            }}
          >
            {/* Show sun icon in dark mode, moon icon in light mode */}
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4EFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f1eafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
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
            // Dropdown background matches navbar: dark mode = #1C1730, light = #ccb8f0
            background: isDark ? "#1C1730" : "#ccb8f0",
            zIndex: 101,
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            transition: "background 0.2s",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navLinks.filter(link => !link.isLogo).map(({ href, label }) => (
              // Each dropdown item with border
              <li key={href} style={{
                // Border color: dark mode = #3D3463 (border/divider), light = #5f249f
                borderBottom: isDark ? "1px solid #3D3463" : "1px solid #5f249f"
              }}>
                <Link
                  href={href}
                  onClick={() => openDropdown(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    textDecoration: "none",
                    // Dropdown link text: dark mode = #F4EFFF (main text), light = #5f249f
                    color: isDark ? "#F4EFFF" : "#5f249f",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    transition: "color 0.2s",
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