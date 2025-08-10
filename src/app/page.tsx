// import Image from "next/image";
import Banner from "./components/Banner";
import ScrollingGallery from "./components/ScrollingGallery";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { images } from "./data";
import ExecCard from "./components/ExecCard"

export default function Home() {
  return (
    <div className="bg-light_purple min-h-screen">
    {/*light purple tailwind colour*/}


    <>
      <Banner />
      <div className="flex flex-col items-center mt-10">
        {/* Call-to-action Sign Up Button */}
        <div className="max-w-md px-4">

          <Link
            href="/signup"
            className="px-20 py-10 text-3xl bg-[#D0B7F4] text-[#8955D2] hover:bg-[#CAA9F8] font-bold font-[Montserrat] rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >

            SIGN UP
          </Link>
        </div>





        {/* Socials Bar */}
        <div className="relative z-10 mt-28 w-full bg-[#E2D6F6] py-16 px-12 flex justify-center items-center max-w-full space-x-12">



          {/* Links */}
          <div className="flex space-x-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-4xl"
            >
              <img
                src="/instagram.png"
                alt="Instagram Logo"
                className="w-20 object-contain"
              />

            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/rainbowengineering.uoa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-4xl"
            >
              <img
                src="/facebook.png"
                alt="Facebook Logo"
                className="w-20 object-contain"
              />
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-4xl"
            >
              <img
                src="/mail.png"
                alt="Mail Logo"
                className="w-20 object-contain"
              />

            </a>

            {/* LinkedIn */}
            <a
              href="https://nz.linkedin.com/company/rainbowengineeringuoa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-4xl"
            >
              <img
                src="/LinkedIn.png"
                alt="LinkedIn Logo"
                className="w-20 object-contain"
              />

            </a>

          </div>
          {/* Text */}
          <div className="hidden md:block text-[#8955D2] text-3xl font-bold font-[Montserrat]">
            Follow Our Socials
          </div>
        </div>
      </div>

          <div>

      
      <div className="max-w-7xl mx-auto px-4 text-purple-700">
      
        
        {/*================================ABOUT US SECTION================================*/}
        {/*need to edit, improving width of bg */}
        <div className="mt-22 w-full bg-[#E2D6F6] py-2 px-16 rounded-2xl">


          {/* background coloured block */}


          <h2 className="text-5xl text-[#8955D2] font-bold font-[Montserrat] mb-3 text-center p-6">About us!</h2>
          <div className="flex items-center gap-8 mb-8">

            {/* code for about us image */}
            <div className="flex flex-col items-center text-center rounded">
              <img
              src="/about_us_temp.png"
              alt="About Us"
              className="w-500 h-120 rounded-t"
            />
            </div>
            {/* code for about us text */}
            <div className="flex flex-col justify-center items-center text-center w-500 h-120 p-4 rounded">
            <h2 className="text-4xl text-[#8955D2] font-bold font-[Montserrat] mb-4">About Us</h2>
            <p className="text-lg font-[Montserrat] text-slate-700 p=7">
              Rainbow Engineering is a vibrant community of tech enthusiasts dedicated to fostering innovation and collaboration. Our mission is to create an inclusive environment where everyone can learn, grow, and contribute to exciting projects.
            </p>
            </div>
          </div>
        </div>
        
        


        {/*================================MEET THE EXECS================================*/}
        <h2 className="mt-22 text-5xl text-[#8955D2] font-bold font-[Montserrat] mb-3 text-center p-6">Meet the Exec Team!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* div for meet the execs */}

          <ExecCard
            name="Abhijot Malhi"
            role="Tech Lead"
            imageSrc="/exec_placeholder_image.png"
            description="Abhijot leads technical projects with a passion for scalable solutions and mentoring developers."
          />

          <ExecCard
            name="Abhijot Malhi"
            role="Tech Lead"
            imageSrc="/exec_placeholder_image.png"
            description="Abhijot leads technical projects with a passion for scalable solutions and mentoring developers."
          />

          <ExecCard
            name="Abhijot Malhi"
            role="Tech Lead"
            imageSrc="/exec_placeholder_image.png"
            description="Abhijot leads technical projects with a passion for scalable solutions and mentoring developers."
          />

          <ExecCard
            name="Abhijot Malhi"
            role="Tech Lead"
            imageSrc="/exec_placeholder_image.png"
            description="Abhijot leads technical projects with a passion for scalable solutions and mentoring developers."
          />

          <ExecCard
            name="Abhijot Malhi"
            role="Tech Lead"
            imageSrc="/exec_placeholder_image.png"
            description="Abhijot leads technical projects with a passion for scalable solutions and mentoring developers."
          />

          <ExecCard
            name="Abhijot Malhi"
            role="Tech Lead"
            imageSrc="/exec_placeholder_image.png"
            description="Abhijot leads technical projects with a passion for scalable solutions and mentoring developers."
          />

        </div>

        {/*================================SCROLLING GALLERY================================*/}
        <h2 className="mt-12 
        text-5xl text-[#8955D2] font-bold font-[Montserrat] mb-3 text-center p-20">Scrolling Gallery</h2>
        <div className="mb-20 w-[97%] ml-[2%] mr-[0%]">
          <ScrollingGallery images={images} />
        </div>
        {/* placeholder images till we figure out how to do this */}

      </div>
    </div>
    </>


  </div>
  );
}

