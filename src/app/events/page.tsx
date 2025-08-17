"use client";
import Banner from "../components/Banner";
import EventDropdown from "../components/EventDropdown"


export default function Events() {
    return (
        <>
            <Banner />
            <div className="bg-purple-100 py-10 px-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-left text-purple-800 mb-8">UPCOMING EVENTS</h1>
            
            <EventDropdown 
                title="Safe Space" 
                date="01/08/25" 
                description="A welcoming and supportive environment for discussion and community building." 
                imageUrl="https://media.discordapp.net/attachments/1238819865733763084/1401543687732985876/image.png?ex=6890a8c6&is=688f5746&hm=970ea1b7388e654519b9a6d68dc50c9ab1a1fff8a1ab4f60101497d29de6e661&=&format=webp&quality=lossless&width=854&height=776"
                signupUrl=""
            />
            <EventDropdown 
                title="Another Event" 
                date="01/08/25" 
                description="Description about another event, happening soon!" 
                imageUrl="https://assets.macleans.school.nz/images/news/2019/nzss-junior-badminton-champs-004.jpg?v=1616407613"
                signupUrl=""
            />
            </div>
        </>
    );
}