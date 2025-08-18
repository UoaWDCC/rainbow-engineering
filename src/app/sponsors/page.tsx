"use client";
import Banner from "../components/Banner";
import SponsorInfoPanel from "../components/SponsorInfoPanel";

export default function Sponsors() {
    return (
        <div>
            <Banner />
            {/* ===== page layout wrapper ===== */}
            <div className="max-w-7xl mx-auto px-4 text-purple-800">
                {/* ===== get in touch button ===== */}
                <div className="max-w-full mx-auto text-center">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="block py-3 text-lg bg-purple-300 text-purple-700 hover:bg-purple-400 font-semibold font-[Montserrat] rounded-xl shadow-lg transition duration-300 ease-in-out"
                    >
                        GET IN TOUCH
                    </a>
                </div>

                {/* ===== information about sponsors ===== */}
                <div className="mt-6 mb-20 bg-purple-200 text-slate-700 font-[Montserrat] p-6 rounded-xl max-w-full mx-auto text-center">
                    <p className="text-base md:text-lg font-medium">
                        Information about sponsors: <br />
                        The mutually beneficial relationship, how sponsors and team work together, etc.
                    </p>
                </div>

                {/* ===== main section ===== */}
                <h2 className="text-5xl font-bold font-[Montserrat] mb-3 text-center p-6">OUR SPONSORS</h2>
                <h2 className="text-5xl font-bold font-[Montserrat] text-[#c2ac63]">GOLD</h2>
                <SponsorInfoPanel
                    sponsorTier= "gold"
                    sponsorName = "Tonkin + Taylor" 
                    sponsorLogo = "/sponsor_logos/TT_stacked.png"
                    description = "Tonkin + Taylor Group is comprised of leading employee-owned environmental and engineering consultancies and testing businesses with offices across New Zealand and Australia. The Group is made up of five companies, delivering solutions to clients across five continents – Tonkin + Taylor in New Zealand, Tonkin + Taylor in Australia, Geotechnics, Chadwick Geotechnics, and Bligh Tanner."
                />
                <SponsorInfoPanel
                    sponsorTier= "gold"
                    sponsorName = "Gold Sponsor #2" 
                    sponsorLogo = "/exec_placeholder_image.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#babac3]">SILVER</h2>
                <SponsorInfoPanel
                    sponsorTier= "silver"
                    sponsorName = "Silver Sponsor #1" 
                    sponsorLogo = "/exec_placeholder_image.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "silver"
                    sponsorName = "Silver Sponsor #2" 
                    sponsorLogo = "/exec_placeholder_image.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "silver"
                    sponsorName = "Silver Sponsor #3" 
                    sponsorLogo = "/exec_placeholder_image.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#ae2bfa]">AMETHYST</h2>
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Amethyst Sponsor #1" 
                    sponsorLogo = "/exec_placeholder_image.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Amethyst Sponsor #2" 
                    sponsorLogo = "/exec_placeholder_image.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Amethyst Sponsor #3" 
                    sponsorLogo = "/exec_placeholder_image.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
            </div>
        </div>
    );
}