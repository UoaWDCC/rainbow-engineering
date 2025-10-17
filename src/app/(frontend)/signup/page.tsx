import Banner from "../components/Banner"
import Image from 'next/image'

export default function SignUp() {
  return (
    <div className="overflow-x-hidden">
      <Banner title="SIGN UP" />
      <div className="font-['Montserrat'] text-[30px] text-[#8955d2] font-bold flex justify-center mb-5">FOLLOW OUR SOCIALS</div>
      <div className="grid grid-cols-4 gap-4 justify-items-center mx-auto max-w-50 lg:max-w-100 lg:mt-4 mb-10 px-2 sm:px-0">
        <a
          href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/instagram.png"
            alt="Instagram Logo"
            width={60}
            height={60}
            className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
          />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/mail.png"
            alt="Mail Logo"
            width={60}
            height={60}
            className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
          />
        </a>

        <a
          href="https://www.linkedin.com/company/rainbowengineeringuoa/?originalSubdomain=nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/LinkedIn.png"
            alt="LinkedIn Logo"
            width={60}
            height={60}
            className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
          />
        </a>

        <a
          href="https://www.facebook.com/rainbowengineering.uoa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.png"
            alt="Facebook Logo"
            width={60}
            height={60}
            className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
          />
        </a>
      </div>

      <div className="bg-fixed md:px-20 px-5 bg-cover bg-center bg-no-repeat">
        <div className="w-full pb-10">
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe4VS-tZICT267y9VBw0ca_rCQuV6aCJkgzKxBtLIiTrNAFiQ/viewform?embedded=true"
              className="w-full max-w-full h-[2610px] md:h-[2200px] rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}