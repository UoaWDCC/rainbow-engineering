import Banner from "../components/Banner";
import SponsorInfoPanel from "../components/SponsorInfoPanel";
import { getPayload } from "payload";
import { SponsorsSilver } from "@/collections/SponsorsSilver";
import { SponsorsAmethyst } from "@/collections/SponsorsAmethyst";
import { SponsorsGold } from "@/collections/SponsorsGold";

import config from "@/payload.config";

export default async function Sponsors() {

    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig});

    const gold = await payload.find({
        collection: SponsorsGold.slug as any,
        depth: 1,
        sort: "name", 
    });

    const silver = await payload.find({
        collection: SponsorsSilver.slug as any,
        depth: 1,
        sort: "name", 
  });

  const amethyst = await payload.find({
        collection: SponsorsAmethyst.slug as any,
        depth: 1,
        sort: "name", 
  });



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

                {/* GOLD */}
                <h2 className="text-5xl font-bold font-[Montserrat] text-[#c2ac63]">GOLD</h2>
                {gold.docs.map((sponsor: any) => (
                    <SponsorInfoPanel
                        key={sponsor.id}
                        sponsorTier="gold"
                        sponsorName={sponsor.name}
                        sponsorLogo={
                            typeof sponsor.image === "object" && sponsor.image?.url
                                ? sponsor.image.url
                                : "/placeholder.jpg"
                        }
                        description={sponsor.description}
                    />
                ))}
                <SponsorInfoPanel
                    sponsorTier="gold"
                    sponsorName="Tonkin + Taylor" 
                    sponsorLogo="/sponsor_logos/TT_stacked.png"
                    description="Tonkin + Taylor Group is comprised of leading employee-owned environmental and engineering consultancies and testing businesses with offices across New Zealand and Australia. The Group is made up of five companies, delivering solutions to clients across five continents – Tonkin + Taylor in New Zealand, Tonkin + Taylor in Australia, Geotechnics, Chadwick Geotechnics, and Bligh Tanner."
                />
                <SponsorInfoPanel
                    sponsorTier="gold"
                    sponsorName="Marshall Day Acoustics Ltd" 
                    sponsorLogo="/sponsor_logos/MDA Logo.png"
                    description="Marshall Day Acoustics is one of the world's leading firms of acoustic engineers, providing the highest standard of specialised acoustic consulting services to our clients. We have been proudly 100% employee owned for 25+ years, with over 30 employees in Australia and New Zealand invested in the company. Our company was formed in Auckland, New Zealand by Christopher Day and Sir Harold Marshall in 1981, with Peter Fearnside becoming the third partner and founding Marshall Day Acoustics in Australia in 1987."
                />
                <SponsorInfoPanel
                    sponsorTier="gold"
                    sponsorName="Xero" 
                    sponsorLogo="/sponsor_logos/Xero Logo.png"
                    description="We help small businesses thrive worldwide. Xero's online accounting software connects small business owners with their numbers, their bank, and advisors at anytime. Founded in 2006, Xero now has 4.4 million subscribers and is a leader in cloud accounting across New Zealand, Australia and the United Kingdom. Our experienced board, executive and leadership teams work to ensure Xero focuses on innovation and performance for our customers. Our team loves to help businesses, accountants and bookkeepers automate, collaborate and grow. Xero automates many day-to-day tasks and keeps you up to date on the money side of things wherever you are."
                />


                {/* SILVER */}
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#babac3]">SILVER</h2>
                {silver.docs.map((sponsor: any) => (
                     <SponsorInfoPanel
                    key={sponsor.id}
                    sponsorTier="silver" // makes it collapsible in your component
                    sponsorName={sponsor.name}
                    description={sponsor.description}
                    sponsorLogo={
                    typeof sponsor.image === "object" && sponsor.image?.url
                        ? sponsor.image.url
                        : "/placeholder.jpg"
                    }
                />
            ))}


                {/* AMETHYST */}
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#ae2bfa]">AMETHYST</h2>
                {amethyst.docs.map((sponsor: any) => (
                     <SponsorInfoPanel
                    key={sponsor.id}
                    sponsorTier="amethyst" // makes it collapsible in your component
                    sponsorName={sponsor.name}
                    description={sponsor.description}
                    sponsorLogo={
                    typeof sponsor.image === "object" && sponsor.image?.url
                        ? sponsor.image.url
                        : "/placeholder.jpg"
                    }
                />
            ))}

            </div>
        </div>
    );
}