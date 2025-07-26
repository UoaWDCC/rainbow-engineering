"use client";
import Banner from "../components/Banner";

export default function Sponsors() {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto px-4 text-purple-700">
                <h2 className="text-5xl font-bold mb-3 text-center p-6">OUR SPONSORS</h2>
                <h2 className="text-5xl font-bold text-[#c2ac63]">GOLD</h2>
                <h2 className="text-5xl font-bold text-[#babac3]">SILVER</h2>
                <h2 className="text-5xl font-bold text-[#ae2bfa]">AMETHYST</h2>
            </div>
        </div>
    );
}