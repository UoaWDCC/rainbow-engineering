// import Image from "next/image";
import Banner from "./components/Banner";
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
      <Banner />
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
                <div className="relative flex flex-col items-center text-center w-full sm:w-[1200px] h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src="/homepage/about_us_photo.jpg"
                    alt="About Us"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* code for about us text */}
                <div className="flex flex-col justify-center items-center text-center w-full sm:w-500 p-4 rounded">
                  <p className="text-base sm:text-lg font-[Montserrat] text-slate-700 px-2 sm:px-7">
                    Rainbow Engineering is the engineering faculty&#39;s LGBTQITakatāpui+ club (lesbian, gay, bisexual, transgender, queer, intersex, takatāpui, and more), set up by and for queer engineering students to provide support, advocacy, and opportunities to socialise and network within the faculty and industry.
                    <br /><br />
                    Within the engineering faculty, Rainbow Engineering provides:
                  </p>
                  <ul className="list-disc text-base sm:text-lg font-[Montserrat] text-slate-700 px-8 text-left mt-4">
                    <li>Opportunities to meet and connect with fellow LGBTQITakatāpui+ students and staff, along with their friends</li>
                    <li>Information about services, news and events</li>
                    <li>Pathways to connect and network with engineering professionals, as well as advocate for LGBTQITakatāpui+ representation in the engineering industry</li>
                    <li>A voice for LGBTQITakatāpui+ students and staff in Engineering and Design</li>
                  </ul>
                </div>

              </div>
            </div>




            {/*================================MEET THE EXECS================================*/}
            <h2 className="mt-22 text-3xl md:text-5xl text-[#8955D2] font-bold font-[Montserrat] mb-3 text-center p-6">Meet the Exec Team!</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10"> {/* div for meet the execs */}

              <ExecCard
                name="Eros Knight"
                role="President"
                imageSrc="/homepage/execs/Eros.png"
                description="Leads and oversees the club, driving long-term planning, organisation, and goals. Acts as the main liaison with other clubs, university staff, and faculty, while guiding meetings, delegating tasks, and supporting industry partnerships and funding efforts."
              />

              <ExecCard
                name="Oscar Shaw"
                role="Vice President"
                imageSrc="/homepage/execs/Oscar.png"
                description="Manages sponsorships and industry relations, serving as the primary contact for sponsors and securing funding. Represents the club at RSIG meetings and provides key support to the executive and admin teams."
              />

              <ExecCard
                name="Rad Atienza"
                role="Secretary-Treasurer"
                imageSrc="/homepage/execs/Rad.png"
                description="Oversees administration and finances, managing agendas, minutes, records, and correspondence while ensuring smooth operations. Handles budgeting, payments, invoices, and reimbursements, keeping accurate financial records. Requires prior executive experience within Rainbow Engineering."
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

