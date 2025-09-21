import "./globals.css";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
// import Geist fonts via CDN in <head> instead of using 'geist/font'
import { Montserrat } from 'next/font/google'

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
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-[#f1eafb]`}>
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