"use client";
import Banner from "../components/Banner";
import EventDropdown from "../components/EventDropdown"


export default function Events() {
    return (
        <>
            <Banner title="UPCOMING EVENTS"/>
            <div className="bg-purple-100 py-10 px-4 max-w-7xl mx-auto">
            
            <EventDropdown
                title="Safe Space" 
                date="01/08/25" 
                description="A welcoming and supportive environment for discussion and community building." 
                imageUrl="/sweatwithprideplaceholder.jpg"
                signupUrl=""
            />
            <EventDropdown 
                title="Another Event" 
                date="01/08/25" 
                description="Description about another event, happening soon!" 
                imageUrl="/sweatwithprideplaceholder.jpg"
                signupUrl=""
            />
            </div>
        </>
    );
}