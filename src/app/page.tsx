import HomePageBanner from "./components/HomePageBanner";
import ScrollingGallery from "./components/ScrollingGallery";
import Link from "next/link";
import { images } from "./data";
import ExecCard from "./components/ExecCard"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-light_purple min-h-screen">
    {/*light purple tailwind colour*/}
    


    <>
      <HomePageBanner />
      <div className="flex flex-col items-center mt-10">
        {/* Call-to-action Sign Up Button */}
        <div className="max-w-md px-4 zoom transition-transform duration-200 ease-in-out ">

          <Link
            href="/signup"
            className="px-20 py-10 text-3xl hover:bg-[#CAA9F8] bg-[#D0B7F4] text-[#8955D2] font-bold font-[Montserrat] rounded-xl shadow-lg transition duration-300 ease-in-out transform glow"
          >

              SIGN UP
            </Link>
          </div>





          {/* Socials Bar */}
          <div className="relative z-10 mt-28 w-full bg-[#E2D6F6] py-16 px-12 flex justify-center items-center max-w-full md:space-x-12">



          {/* Links */}
          <div className="flex space-x-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
            >
              <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                <Image
                  src="/instagram.png"
                  alt="Instagram Logo"
                  fill
                  className="object-contain"
                />
              </div>
              

            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/rainbowengineering.uoa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
            >
               <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                <Image
                  src="/facebook.png"
                  alt="Facebook Logo"
                  fill
                  className="object-contain"
                 />
                </div>
              </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
            >
              <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                <Image
                  src="/mail.png"
                  alt="Mail Logo"
                  fill
                  className="object-contain"
                />
              </div>

              </a>

            {/* LinkedIn */}
            <a
              href="https://nz.linkedin.com/company/rainbowengineeringuoa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
            >
              <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                <Image
                  src="/LinkedIn.png"
                  alt="LinkedIn Logo"
                  fill
                  className="object-contain"
                />
              </div>

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
            <div className="mt-22 w-full bg-[#E2D6F6] py-6 px-4 sm:px-16 rounded-2xl">


              {/* background coloured block */}


              <h2 className="text-3xl sm:text-5xl text-[#8955D2] font-bold font-[Montserrat] mb-3 text-center p-4 sm:p-6">About us!</h2>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8">

                {/* code for about us image */}
                <div className="relative flex flex-col items-center text-center rounded w-full sm:w-[1200px] h-[400px]">
                  <Image
                    src="/about_us_temp.png"
                    alt="About Us"
                    fill
                    className="rounded-t object-contain"
                  />
                </div>

                {/* code for about us text */}
                <div className="flex flex-col justify-center items-center text-center w-full sm:w-500 p-4 rounded">
                  <p className="text-base sm:text-lg font-[Montserrat] text-slate-700 px-2 sm:px-7">Rainbow Engineering is a vibrant community of tech enthusiasts dedicated to fostering innovation and collaboration. Our mission is to create an inclusive environment where everyone can learn, grow, and contribute to exciting projects.
                  </p>
                </div>

              </div>
            </div>




            {/*================================MEET THE EXECS================================*/}
            <h2 className="mt-22 text-3xl md:text-5xl text-[#8955D2] font-bold font-[Montserrat] mb-3 text-center p-6">Meet the Exec Team!</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10"> {/* div for meet the execs */}

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
                description="Abhijot leads technical"
              />

              <ExecCard
                name="Abhijot Malhi"
                role="Tech Lead"
                imageSrc="/exec_placeholder_image.png"
                description="Abhijot leads technical projects with a passion "
              />

              <ExecCard
                name="Abhijot Malhi"
                role="Tech Lead"
                imageSrc="/exec_placeholder_image.png"
                description="Abhijot leads technical projects with a passion for scalable solutions"
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

