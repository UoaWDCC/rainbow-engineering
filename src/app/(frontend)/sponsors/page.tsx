import Banner from "../components/Banner";
import SponsorInfoPanel from "../components/SponsorInfoPanel";
import RainbowButton from "../components/RainbowButton";
import { getPayload } from "payload";
import type { SponsorsAmethyst, SponsorsSilver, SponsorsGold } from '../../../payload-types'; // adjust path to your generated types
import config from "@/payload.config";
import DarkThemeBoxes from "../components/DarkThemeBoxes";

export default async function Sponsors() {

    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig});

    const gold = await payload.find({
        collection: 'sponsors-gold',
        depth: 1,
        sort: "name", 
    });

    const silver = await payload.find({
        collection: 'sponsors-silver',
        depth: 1,
        sort: "name", 
  });

  const amethyst = await payload.find({
        collection: 'sponsors-amethyst',
        depth: 1,
        sort: "name", 
  });



    return (
        <div>
            <Banner title="OUR SPONSORS"/>
            {/* ===== page layout wrapper ===== */}
            <div className="max-w-7xl mx-auto px-4 text-[#5f249f]">
                {/* ===== information about sponsors ===== */}
                <DarkThemeBoxes>
                <p className="text-base md:text-lg font-medium">
                    Sponsors play a vital role in powering Rainbow Engineering’s innovative projects, competitions, and community outreach. In return, we offer meaningful collaboration, brand visibility, and access to passionate future engineers. Together, we build bold ideas into reality.
                </p>
                </DarkThemeBoxes>

                {/* ===== get in touch button ===== */}
                <div className="mt-6 mb-16 max-w-full mx-auto text-center">
                    <RainbowButton href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com">
                        GET IN TOUCH
                    </RainbowButton>
                </div>

                {/* ===== main section ===== */}

                {/* GOLD */}
                <h2 className="text-5xl font-bold font-[Montserrat] text-[#c2ac63]">GOLD</h2>
                {gold.docs.map((sponsor: SponsorsGold) => (
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
                        websiteUrl={sponsor.website || undefined}
                    />
                ))}


                {/* SILVER */}
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#babac3]">SILVER</h2>
                {silver.docs.map((sponsor: SponsorsSilver) => (
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
                    websiteUrl={sponsor.website || undefined}
                />
            ))}


                {/* AMETHYST */}
                <h2 className="mt-20 text-5xl font-bold font-[Montserrat] text-[#ae2bfa]">AMETHYST</h2>
                {amethyst.docs.map((sponsor: SponsorsAmethyst) => (
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
                    websiteUrl={sponsor.website || undefined}
                />
            ))}

            </div>
        </div>
    );
}