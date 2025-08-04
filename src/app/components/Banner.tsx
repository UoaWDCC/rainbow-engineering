import BannerAnimation from "./BannerAnimation";

export default function Banner() {
  return (
    <>
      <div id="banner" className="mt-20 bg-[#F1EAFB] w-full px-4 py-10 relative -z-10">
        <h1 className="text-6xl text-[#8955d2] font-bold font-[Montserrat] py-10 z-10">
          UoA Rainbow Engineering
        </h1>
      </div>

      <BannerAnimation />

    </>

  );
}

