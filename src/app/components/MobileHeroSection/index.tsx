import { DESCRIPTION } from "@/app/constants";
import { handleCallWhatsapp } from "@/app/helpers/openMediaSocial";
import Image from "next/image";
import React from "react";

const MobileHeroSection = () => {
  return (
    <div className="flex flex-col w-screen text-center items-center py-10 gap-5">
      <h1 className="text-black text-xl font-inter font-bold font-serif px-14">
        Be an <span className="text-mainOrange">Expert</span> and The{" "}
        <span className="text-mainOrange">King</span> of Knowledge
      </h1>

      <p className="text-black text-xs px-14 leading-5">{DESCRIPTION}</p>

      <Image
        src="/images/new-hero.png"
        alt="hero-image"
        width={250}
        height={100}
        style={{ objectFit: "contain" }}
        className="animate-fade-in"
      />

      <button
        className="flex items-center justify-center gap-2 p-3 px-7 rounded-xl bg-slate-900 text-white w-fit text-sm mt-6"
        onClick={handleCallWhatsapp}
      >
        Konsultasi Sekarang
      </button>
    </div>
  );
};

export default MobileHeroSection;
