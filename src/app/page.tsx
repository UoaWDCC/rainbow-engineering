// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Call-to-action Sign Up Button */}
      <Link
        href="/signup"
        className="px-6 py-3 text-lg bg-purple-200 text-purple-700 hover:bg-purple-300 font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Sign Up
      </Link>
    </div>
  );
}
