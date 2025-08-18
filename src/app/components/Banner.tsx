import BannerAnimation from "./BannerAnimation";

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <>
      <div id="banner" className="mt-20 bg-[#F1EAFB] w-full px-4 py-10 relative -z-10">
        <h1 className="text-6xl text-[#8955d2] font-bold font-[Montserrat] py-10 z-10">
          {title}
        </h1>
      </div>

      <BannerAnimation />
    </>
  );
}
