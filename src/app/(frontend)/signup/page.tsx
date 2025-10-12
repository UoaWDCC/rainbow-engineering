import Banner from "../components/Banner"
import Image from 'next/image'

export default function SignUp() {
    return (
        <div>
          <Banner title="SIGN UP"/>
    <div className="font-['Montserrat'] text-[30px] text-[#8955d2] font-bold flex justify-center mb-5">FOLLOW OUR SOCIALS</div>
    
<div className="grid grid-cols-2 gap-4 justify-items-center mx-auto max-w-50 lg:max-w-100  lg:mt-10 mb-20">
  <div className="flex flex-col items-center">
    <a
      href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 hover:text-purple-800 underline"
    >
      <Image 
        src="/instagram.png"
        alt="Instagram Logo"
        width={"50"}
        height={"50"}
        className="object-contain transition-transform duration-200 ease-in-out hover:rotate-10"
      />
    </a>
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">Instagram</span>
  </div>

  <div className="flex flex-col items-center">
    <a
      href="https://www.facebook.com/rainbowengineering.uoa"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 hover:text-purple-800 underline"
    >
      <Image
        src="/facebook.png"
        alt="Facebook Logo"
        width={"50"}
        height={"50"}
        className="object-contain transition-transform duration-200 ease-in-out hover:rotate-10"
      />
    </a>
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">Facebook</span>
  </div>

  <div className="flex flex-col items-center">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 hover:text-purple-800 underline"
    >
      <Image
        src="/mail.png"
        alt="Mail Logo"
        width={"50"}
        height={"50"}
        className="object-contain transition-transform duration-200 ease-in-out hover:rotate-10"
      />
    </a>
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">Email</span>
  </div>

  <div className="flex flex-col items-center">
    <a
      href="https://www.linkedin.com/company/rainbowengineeringuoa/?originalSubdomain=nz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 hover:text-purple-800 underline"
    >
      <Image
        src="/LinkedIn.png"
        alt="LinkedIn Logo"
        width={"50"}
        height={"50"}
        className="object-contain transition-transform duration-200 ease-in-out hover:rotate-10"
      />
    </a>
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">LinkedIn</span>
  </div>

  
</div>

          <div className="bg-fixed md:px-20 px-5 bg-cover bg-center bg-no-repeat"
          >
               <div className="w-full pb-10 px-5">
               <div className=" justify-center flex px-5 ">
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4VS-tZICT267y9VBw0ca_rCQuV6aCJkgzKxBtLIiTrNAFiQ/viewform?embedded=true" 
               className="w-full max-w-200 h-[2200px] rounded-md">
               </iframe>
               </div>


               </div>
         </div>   
    </div>
    );
}