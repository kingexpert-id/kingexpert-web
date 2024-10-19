import Image from "next/image";

import { DESCRIPTION } from "@/app/constants";
import { handleCallWhatsapp } from "@/app/helpers/openMediaSocial";

const HeroSection = () => {
  return (
    <div className="flex w-screen justify-center items-center gap-28 h-5/6 py-32">
      <div
        className="flex flex-col justify-center gap-10"
        style={{ maxWidth: "550px" }}
      >
        <div className="flex flex-col gap-9">
          <h1 className="text-black text-5xl font-inter font-bold font-serif">
            Be an <span className="text-mainOrange">Expert</span> and The{" "}
            <span className="text-mainOrange">King</span> of Knowledge
          </h1>
          <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
            {DESCRIPTION}
          </p>
        </div>

        <button
          className="flex items-center justify-center gap-2 p-3 px-7 rounded-xl bg-slate-900 text-white w-fit text-sm hover:bg-mainOrange transition-all duration-300"
          onClick={handleCallWhatsapp}
        >
          Konsultasi Sekarang
        </button>
      </div>

      <Image
        src="/images/new-hero.png"
        alt="hero-image"
        width={550}
        height={400}
        style={{ objectFit: "contain" }}
        className="animate-fade-in"
      />
    </div>
  );
};

export default HeroSection;
