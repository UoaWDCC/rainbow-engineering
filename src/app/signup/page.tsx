export default function SignUp() {
    return (
        <div>
    <div className="font-['Montserrat'] text-[30px] text-[#8955d2] font-bold flex justify-center mb-5 mt-30">FOLLOW OUR SOCIALS</div>
    
<div className="grid grid-cols-2 gap-4 justify-items-center mx-auto max-w-50 lg:max-w-100  lg:mt-10 mb-20">
  <div className="flex flex-col items-center">
    <img src="/instagram.png" alt="Instagram Logo" className="w-[50px] object-contain" />
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">Instagram</span>
  </div>

  <div className="flex flex-col items-center">
    <img src="/facebook.png" alt="Facebook Logo" className="w-[50px] object-contain" />
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">Facebook</span>
  </div>

  <div className="flex flex-col items-center">
    <img src="/mail.png" alt="Mail Logo" className="w-[50px] object-contain" />
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">Newsletter</span>
  </div>

  <div className="flex flex-col items-center">
    <img src="/LinkedIn.png" alt="LinkedIn Logo" className="w-[50px] object-contain" />
    <span className="font-['Montserrat'] text-[#8955d2] font-bold text-s">LinkedIn</span>
  </div>

  
</div>
    <div className="font-['Montserrat'] text-[30px] text-[#8955d2] font-bold flex justify-center lg:mr-120 mr-30">SIGN   UP  HERE:</div>

          <div className="bg-fixed md:px-20 px-5 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('aurora.jpg')" }}>
               <div className="w-full pb-10 px-5">
               <div className=" justify-center flex px-5 ">
               <iframe src="https://forms.gle/NtwS56BHigqcCr5cA" 
               className="w-full max-w-200 h-[1200px] rounded-md">
               </iframe>
               </div>


               </div>
         </div>   



    </div>


    );
}