"use client";
import "./globals.css";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
// import Geist fonts via CDN in <head> instead of using 'geist/font'
import { Montserrat } from 'next/font/google'
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Dark mode state - syncs with Navbar's dark mode preference from localStorage
  const [isDark, setIsDark] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDark(true);
    }

    // Listen for dark mode changes from Navbar
    const handleStorageChange = () => {
      const currentMode = localStorage.getItem("darkMode");
      setIsDark(currentMode === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    // Also listen for direct updates within the same window (Navbar toggle)
    const checkDarkMode = setInterval(() => {
      const currentMode = localStorage.getItem("darkMode");
      if ((currentMode === "true") !== isDark) {
        setIsDark(currentMode === "true");
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(checkDarkMode);
    };
  }, [isDark]);

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
        style={{
          // Body background: dark mode = #121022 (background), light mode = #f1eafb (light purple)
          backgroundColor: isDark ? "#121022" : "#f1eafb",
          // Body text: dark mode = #F4EFFF (main text), light mode = #171717 (dark gray)
          color: isDark ? "#F4EFFF" : "#171717",
          transition: "background-color 0.2s, color 0.2s",
        }}
      >
        <header>
          <NavBar />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}