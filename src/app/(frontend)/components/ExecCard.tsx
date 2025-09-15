// components/ExecCard.tsx
import Image from "next/image";

interface ExecCardProps {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
}

export default function ExecCard({ name, role, imageSrc, description }: ExecCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-[#E2D6F6] p-6 rounded-2xl">
      <Image
        src={imageSrc}
        alt={name}
        width={160} // same as w-40
        height={160} // same as h-40
        className="mb-2 rounded-full"
      />
      <p className="text-sm md:text-base font-semibold font-[Montserrat]">{name}</p>
      <p className="text-xs md:text-sm text-black-600 font-semibold font-[Montserrat] mb-1">{role}</p>
      <p className="text-xs md:text-sm text-slate-700 font-[Montserrat]">{description}</p>
    </div>
  );
}