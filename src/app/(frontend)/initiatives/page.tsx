import Banner from "../components/Banner";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Initiative } from "../../../payload-types"; // adjust if needed
import EventDropdown from "../components/EventDropdown";

export default async function Initiatives() {
  // initialize Payload
  const payload = await getPayload({ config });

  // fetch initiatives from your Payload CMS
  const initiatives = await payload.find({
    collection: "initiatives",
    depth: 1,
    sort: "name",
  });

  return (
    <>
      <Banner title="COMMUNITY & INITIATIVES" />
            <div className="bg-purple-100 pb-10 px-4 max-w-7xl mx-auto">
                {initiatives.docs.map((initiative: Initiative) => (
                    <EventDropdown 
                        key={initiative.id}
                        title={initiative.name}
                        date={""}
                        description={initiative.description}
                        imageUrl={typeof initiative.image === "object" && initiative.image?.url
                ? initiative.image.url
                : "/about_us_temp.png"}
                        signupUrl={initiative.signupUrl && initiative.signupUrl.trim() !== ""
                ? initiative.signupUrl
                : ""}
                    />
                ))}
            </div>

    </>
  );
}
