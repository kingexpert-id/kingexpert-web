import Image from "next/image";
import React from "react";

const MainContent = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center gap-28 h-5/6 py-32 px-32">
      <div className="flex gap-20">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">
              Tentang <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">Sejarah</h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
              King Expert lahir dari kolaborasi King Ajar dan Eksper Education
              dengan tujuan mempersiapkan siswa menghadapi ajang prestisius
              seperti OSN. Raja dan Dandi, pendiri masing-masing, memiliki
              pengalaman dan motivasi yang sama terkait pendidikan. Kolaborasi
              ini berfokus pada pembinaan intensif dan komprehensif bagi siswa,
              terutama di daerah Sumatera Barat. King Expert resmi berdiri
              sebagai lembaga berbadan hukum dan aktif dalam memberikan
              pembinaan serta pengembangan program inovatif. Mereka berkomitmen
              menciptakan lingkungan belajar yang inspiratif dan meraih prestasi
              akademik gemilang.
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/founder/raja-2.png"
            alt="ceo"
            width={250}
            height={250}
          />
        </div>
      </div>

      <div className="flex gap-20">
        <div className="">
          <Image
            src="/images/founder/rahmat-2.png"
            alt="ceo"
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">Visi</h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">Misi</h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
              King Expert lahir dari kolaborasi King Ajar dan Eksper Education
              dengan tujuan mempersiapkan siswa menghadapi ajang prestisius
              seperti OSN. Raja dan Dandi, pendiri masing-masing, memiliki
              pengalaman dan motivasi yang sama terkait pendidikan. Kolaborasi
              ini berfokus pada pembinaan intensif dan komprehensif bagi siswa,
              terutama di daerah Sumatera Barat. King Expert resmi berdiri
              sebagai lembaga berbadan hukum dan aktif dalam memberikan
              pembinaan serta pengembangan program inovatif. Mereka berkomitmen
              menciptakan lingkungan belajar yang inspiratif dan meraih prestasi
              akademik gemilang.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-20">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold font-serif">
              Tutor <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-base font-inter font-normal leading-6 tracking-tight">
              King Expert lahir dari kolaborasi King Ajar dan Eksper Education
              dengan tujuan mempersiapkan siswa menghadapi ajang prestisius
              seperti OSN. Raja dan Dandi, pendiri masing-masing, memiliki
              pengalaman dan motivasi yang sama terkait pendidikan. Kolaborasi
              ini berfokus pada pembinaan intensif dan komprehensif bagi siswa,
              terutama di daerah Sumatera Barat. King Expert resmi berdiri
              sebagai lembaga berbadan hukum dan aktif dalam memberikan
              pembinaan serta pengembangan program inovatif. Mereka berkomitmen
              menciptakan lingkungan belajar yang inspiratif dan meraih prestasi
              akademik gemilang.
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/founder/dandi-2.png"
            alt="ceo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
