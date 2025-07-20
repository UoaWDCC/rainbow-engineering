import Image from "next/image";
import Banner from "./components/Banner";
import ScrollingGallery from "./components/ScrollingGallery";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { images } from "./data";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center">
        {/* Call-to-action Sign Up Button */}
        <div className="max-w-md px-4">
          <Link
            href="/signup"
            className="px-6 py-3 text-lg bg-purple-200 text-purple-700 hover:bg-purple-300 font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>

        {/* Socials Bar */}
        <div className="mt-6 w-full bg-purple-100 py-10 px-6 flex justify-center items-center max-w-full space-x-12">

          {/* Links */}
          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-4xl"
            >
              <Icon icon="skill-icons:instagram" width="32" height="32" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/rainbowengineering.uoa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-4xl"
            >
              <Icon icon="logos:facebook" width="32" height="32" />
            </a>
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-4xl"
            >
              <Icon icon="logos:google-gmail" width="32" height="32" />
            </a>
          </div>
          {/* Text */}
          <div className="text-purple-700 font-medium text-md">
            Follow Our Socials
          </div>
        </div>
      </div>
          <div>

      
      <div className="max-w-7xl mx-auto px-4 text-purple-700">
      
        
        {/*================================ABOUT US SECTION================================*/}
        <h2 className="text-5xl font-bold mb-3 text-center p-6">About us!</h2>
        <div className="flex items-center gap-8 mb-8">

          {/* code for about us image */}
          <div className="flex flex-col items-center text-center bg-violet-200 rounded">
            <img
            src="/about_us_temp.png"
            alt="About Us"
            className="w-500 h-120 rounded-t"
          />
          </div>
          {/* code for about us text */}
          <div className="flex flex-col justify-center items-center text-center bg-violet-200 w-500 h-120 p-4 rounded">
          <h2 className="text-4xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-slate-700 p=7">
            Rainbow Engineering is a vibrant community of tech enthusiasts dedicated to fostering innovation and collaboration. Our mission is to create an inclusive environment where everyone can learn, grow, and contribute to exciting projects.
          </p>
          </div>
        </div>
        
        
        {/*================================MEET THE EXECS================================*/}
        <h2 className="text-5xl font-bold mb-3 text-center p-6">Meet the Exec Team!</h2>
        <div className="grid grid-cols-5 gap-5"> {/* div for meet the execs */}

          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          
        </div>

        {/*================================SCROLLING GALLERY================================*/}
        <h2 className="text-5xl font-bold mb-3 text-center p-20">Scrolling Gallery (Not Scrolling Yet)</h2>
        <div className=" max-h-[150px] !important mb-20 w-700">
          <ScrollingGallery images={images} />
        </div>
        {/* placeholder images till we figure out how to do this */}

      </div>
    </div>
    </>
  );
}

