
"use client";

import Link from "next/link";

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
  const [hidden, setHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current) {
        setHidden(true);
      } else if (currentScrollY < lastScrollYRef.current) {
        setHidden(false);
      }
      lastScrollYRef.current = currentScrollY;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          width: "100%",
          background: "#ccb8f0",
          borderBottom: "1px solid #e5e7eb",
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
  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", width: "100%" }}>
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
                  color: isSignUp ? "#f1eafb" : "#5f249f",
                  fontWeight: "bold",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.5rem",
                  background: isSignUp ? "#5f249f" : "#ccb8f0",
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
                    <img
                      src="/rainbow_logo_bb.png"
                      alt="Rainbow Logo"
                      style={{ width: "80px", height: "80px", objectFit: "contain" }}
                    />
                    <span style={{
                      marginLeft: "1rem",
                      color: "#5f249f",
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
        </div>
    </nav>
    {/* Spacer to prevent navbar overlap */}
    <div style={{ height: "60px" }} />
  </>
  );
}