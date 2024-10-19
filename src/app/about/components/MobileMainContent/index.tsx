import Image from "next/image";

const MobileMainContent = () => {
  return (
    <div className="flex flex-col px-10 py-10 justify-center items-center gap-20">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-7">
          <Image
            src="/images/founder/raja-2.png"
            alt="ceo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">
              Tentang <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">
              Sejarah
            </h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
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

      <div className="flex flex-col justify-center items-center">
        <div className="mb-8">
          <Image
            src="/images/founder/rahmat-2.png"
            alt="ceo"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">Visi</h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">Misi</h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
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

      <div className="flex flex-col justify-center items-center">
        <div>
          <Image
            src="/images/founder/dandi-2.png"
            alt="ceo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold font-serif text-center">
              Tutor <span className="text-mainOrange">King Expert</span>
            </h3>
            <p className="text-black text-sm font-inter font-normal leading-5 text-justify">
              King Expert adalah lembaga profesional dan berpengalaman di bidang
              pengembangan talenta siswa yang memberikan program pelatihan dan
              kompetisi kepada siswa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMainContent;
