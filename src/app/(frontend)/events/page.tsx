import { getPayload } from "payload";
import config from "@/payload.config";
import Banner from "../components/Banner";
import EventDropdown from "../components/EventDropdown";
import type { Event, Media } from '../../../payload-types'; // adjust path to your generated types

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

export default async function Events() {
    const payload = await getPayload({ config });
    const events = await payload.find({
        collection: 'events',
        depth: 1,
        sort: "date",
    });


    return (
        <>
            <Banner title="UPCOMING EVENTS"/>
            <div className="bg-purple-100 pb-10 px-4 max-w-7xl mx-auto">
                {events.docs.map((event: Event) => (
                    <EventDropdown 
                        key={event.id}
                        title={event.title}
                        date={formatDate(event.date)}
                        description={event.description}
                        imageUrl={(event.image as Media).url || ""}
                        signupUrl={event.signupURL || ""}
                    />
                ))}
            </div>
        </>
    );
}