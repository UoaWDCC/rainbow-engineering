import Banner from "../components/Banner";
import ImageCard from "../components/ImageCard";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Initiative } from "../../../payload-types"; // adjust if needed

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
      <div className="bg-purple-100 py-10 px-4 max-w-7xl mx-auto">
        {initiatives.docs.map((initiative: Initiative) => (
          <ImageCard
            key={initiative.id}
            title={initiative.name}
            content={initiative.description}
            imageSrc={
              typeof initiative.image === "object" && initiative.image?.url
                ? initiative.image.url
                : "/about_us_temp.png"
            }
            margin="my-4"
            buttonText={
              initiative.signupUrl && initiative.signupUrl.trim() !== ""
                ? "Sign Up"
                : undefined
            }
            buttonHref={
              initiative.signupUrl && initiative.signupUrl.trim() !== ""
                ? initiative.signupUrl
                : undefined
            }
          />
        ))}
      </div>
    </>
  );
}
