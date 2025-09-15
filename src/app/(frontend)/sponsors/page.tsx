"use client";
import Banner from "../components/Banner";
import SponsorInfoPanel from "../components/SponsorInfoPanel";

export default function Sponsors() {
    return (
        <div>
            <Banner title="OUR SPONSORS"/>
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
                        Sponsors play a vital role in powering Rainbow Engineering’s innovative projects, competitions, and community outreach. In return, we offer meaningful collaboration, brand visibility, and access to passionate future engineers. Together, we build bold ideas into reality.
                    </p>
                </div>

                {/* ===== main section ===== */}
                <h2 className="text-5xl font-bold font-[Montserrat] text-[#c2ac63]">GOLD</h2>
                <SponsorInfoPanel
                    sponsorTier= "gold"
                    sponsorName = "Tonkin + Taylor" 
                    sponsorLogo = "/sponsor_logos/TT_stacked.png"
                    description = "Tonkin + Taylor Group is comprised of leading employee-owned environmental and engineering consultancies and testing businesses with offices across New Zealand and Australia. The Group is made up of five companies, delivering solutions to clients across five continents – Tonkin + Taylor in New Zealand, Tonkin + Taylor in Australia, Geotechnics, Chadwick Geotechnics, and Bligh Tanner."
                />
                <SponsorInfoPanel
                    sponsorTier= "gold"
                    sponsorName = "Marshall Day Acoustics Ltd" 
                    sponsorLogo = "/sponsor_logos/MDA Logo.png"
                    description = "Marshall Day Acoustics is one of the world’s leading firms of acoustic engineers, providing the highest standard of specialised acoustic consulting services to our clients. We have been proudly 100% employee owned for 25+ years, with over 30 employees in Australia and New Zealand invested in the company. Our company was formed in Auckland, New Zealand by Christopher Day and Sir Harold Marshall in 1981, with Peter Fearnside becoming the third partner and founding Marshall Day Acoustics in Australia in 1987."
                />
                <SponsorInfoPanel
                    sponsorTier= "gold"
                    sponsorName = "Xero" 
                    sponsorLogo = "/sponsor_logos/Xero Logo.png"
                    description = "We help small businesses thrive worldwide. Xero’s online accounting software connects small business owners with their numbers, their bank, and advisors at anytime. Founded in 2006, Xero now has 4.4 million subscribers and is a leader in cloud accounting across New Zealand, Australia and the United Kingdom. Our experienced board, executive and leadership teams work to ensure Xero focuses on innovation and performance for our customers. Our team loves to help businesses, accountants and bookkeepers automate, collaborate and grow. Xero automates many day-to-day tasks and keeps you up to date on the money side of things wherever you are."
                />
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#babac3]">SILVER</h2>
                <SponsorInfoPanel
                    sponsorTier= "silver"
                    sponsorName = "Beca" 
                    sponsorLogo = "/sponsor_logos/Beca Logo.png"
                    description = "Beca is one of Asia Pacific’s largest independent advisory, design and engineering consultancies. After a century of operation, we have grown from a family-owned business to one of the most progressive, client-centric professional services consultancies in our region. We have more than 4,000 employees in 24 offices around the world and have delivered projects in more than 70 countries."
                />
                <SponsorInfoPanel
                    sponsorTier= "silver"
                    sponsorName = "Honeywell" 
                    sponsorLogo = "/sponsor_logos/Honeywell Logo.png"
                    description = "Honeywell helps organizations solve the world's most complex challenges in automation, the future of aviation and energy transition. As a trusted partner, we provide actionable solutions and innovation through our Aerospace Technologies, Building Automation, Energy and Sustainability Solutions, and Industrial Automation business segments – powered by our Honeywell Forge software – that help make the world smarter, safer and more sustainable."
                />
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#ae2bfa]">AMETHYST</h2>
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Fonterra" 
                    sponsorLogo = "/sponsor_logos/Fonterra Logo.png"
                    description = "We're a farmer owned Co-operative based in Aotearoa New Zealand. Made up of thousands of farming families and employees all working together for better. As a Co-operative we know the value of coming together to achieve a common purpose. We want to be the source of the world’s most valued dairy, working with our farmer shareholders and customers to provide trusted, high-quality dairy nutrition. "
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Downer" 
                    sponsorLogo = "/sponsor_logos/Downer Logo.jpg"
                    description = "At Downer, our customers are at the heart of everything we do. Enabling communities to thrive. That is our Purpose. Our Purpose guides us and gives us the courage to take on the big things. It also drives and supports our transformation journey and defines our commitment to create a sustained impact on communities. Our customers' success is our success. That is our Promise. We focus on our customers’ success in everything we do – because we believe that when our customers are successful, so is Downer. Downer designs, builds and sustains assets, infrastructure and facilities and we are the leading provider of integrated services in Australia and New Zealand."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Fisher & Paykel Healthcare" 
                    sponsorLogo = "/sponsor_logos/F&P Logo.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Jane Street Asia Ltd" 
                    sponsorLogo = "/sponsor_logos/Jane Street Logo.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Holmes NZ LP" 
                    sponsorLogo = "/sponsor_logos/Holmes Logo.jpg"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Aurecon" 
                    sponsorLogo = "/sponsor_logos/Aurecon Logo.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "Aecom" 
                    sponsorLogo = "/sponsor_logos/Aecom Logo.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <SponsorInfoPanel
                    sponsorTier= "amethyst"
                    sponsorName = "WSP" 
                    sponsorLogo = "/sponsor_logos/WSP Logo.png"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
            </div>
        </div>
    );
}