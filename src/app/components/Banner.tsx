import BannerAnimation from "./BannerAnimation";

export default function Banner() {
  return (
    <>
      <div id="banner" className="bg-purple-200 p-12 relative -z-10">
        <h1 className="text-4xl text-purple-900 font-bold font-[Montserrat] z-10">
          UoA Rainbow Engineering
        </h1>
      </div>
      <BannerAnimation />
    </>
  );
}
