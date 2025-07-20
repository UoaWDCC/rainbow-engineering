import Image from "next/image";
import Banner from "./components/Banner";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <>
      <Banner />
      <div className="flex flex-col h-screen items-center">
        {/* Call-to-action Sign Up Button */}
        <div className="max-w-md px-4">
          <Link
            href="/signup"
            className="px-6 py-3 text-lg bg-purple-200 text-purple-700 hover:bg-purple-300 font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>

        {/* Socials Bar */}
        <div className="mt-6 w-full bg-purple-100 py-10 px-6 flex justify-center items-center max-w-full space-x-12">

          {/* Links */}
          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-4xl"
            >
              <Icon icon="skill-icons:instagram" width="32" height="32" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/rainbowengineering.uoa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-4xl"
            >
              <Icon icon="logos:facebook" width="32" height="32" />
            </a>
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-4xl"
            >
              <Icon icon="logos:google-gmail" width="32" height="32" />
            </a>
          </div>
          {/* Text */}
          <div className="text-purple-700 font-medium text-md">
            Follow Our Socials
          </div>
        </div>
      </div>
    </>
  );
}

