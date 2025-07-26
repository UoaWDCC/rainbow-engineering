"use client";
import Link from "next/link";
import Banner from "../components/Banner";

export default function Sponsors() {
    return (
        <div>
            <Banner />
            {/* ===== page layout wrapper ===== */}
            <div className="max-w-7xl mx-auto px-4 text-purple-700">
                {/* ===== get in touch button ===== */}
                <div className="max-w-full mx-auto text-center">
                    <Link
                        href="" /* where does this button link to? */
                        className="block py-3 text-lg bg-purple-300 text-purple-700 hover:bg-purple-200 font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        GET IN TOUCH
                    </Link>
                </div>

                {/* ===== main section ===== */}
                <h2 className="text-5xl font-bold mb-3 text-center p-6">OUR SPONSORS</h2>
                <h2 className="text-5xl font-bold text-[#c2ac63]">GOLD</h2>
                <h2 className="text-5xl font-bold text-[#babac3]">SILVER</h2>
                <h2 className="text-5xl font-bold text-[#ae2bfa]">AMETHYST</h2>
            </div>
        </div>
    );
}