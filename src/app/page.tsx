// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
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
        {/* Social links */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            Instagram
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            Email
          </a>
          <a
            href="https://www.facebook.com/rainbowengineering.uoa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            Facebook
          </a>
        </div>
        {/* Social Text */}
        <div className="text-purple-700 font-medium text-sm">
          Follow Our Socials
        </div>
      </div>
    </div>
  );
}
