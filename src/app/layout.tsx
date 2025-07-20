import "./globals.css";
import NavBar from '../components/Navbar';
import Footer from "@/components/Footer";
// import Geist fonts via CDN in <head> instead of using 'geist/font'
const geistSans = { variable: "font-sans" };
const geistMono = { variable: "font-mono" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;700&family=Geist+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1eafb]`}>
        <header>
          <NavBar />
        </header>
        {children}
        <div className="flex flex-col">
          <main className="flex-grow">
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}