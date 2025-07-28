"use client";
import Banner from "../components/Banner";
import EventDropdown from "../components/EventDropdown"

export default function Events() {
    return (
        <>
            <Banner />
            <div className="bg-purple-100 py-10 px-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Upcoming Events</h1>
            
            <EventDropdown 
                title="Safe Space" 
                date="01/08/25" 
                description="A welcoming and supportive environment for discussion and community building." 
                imageUrl="https://assets.macleans.school.nz/images/news/2019/nzss-junior-badminton-champs-004.jpg?v=1616407613"
            />
            <EventDropdown 
                title="Another Event" 
                date="01/08/25" 
                description="Description about another event, happening soon!" 
                imageUrl="https://assets.macleans.school.nz/images/news/2019/nzss-junior-badminton-champs-004.jpg?v=1616407613"
            />
            </div>
        </>
    );
}