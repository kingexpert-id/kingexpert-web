import Image from "next/image";

const Tutor = () => {
  return (
    <div className="flex flex-col gap-12 px-28 py-28">
      <div className="flex justify-between gap-16">
        <div className="flex flex-col flex-1 gap-5 pr-20">
          <h2 className="font-bold text-4xl font-serif">
            Tutor <span className="text-mainOrange">Kami</span>
          </h2>

          <p>
            King Expert menyediakan tutor profesional yang memiliki pengalaman
            mengajar yang luas serta keunggulan di bidang olimpiade. Kamu dapat
            memperoleh panduan langsung dari para ahli yang telah terbukti
            membantu banyak siswa mencapai prestasi luar biasa. Bergabunglah
            sekarang dan rasakan perbedaan nyata dalam perjalanan belajar Kamu!{" "}
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <div className="flex gap-3">
            <div className="relative">
              <Image
                src="/images/tutor-1.png"
                alt="tutor"
                width={200}
                height={200}
              />
              <p className="absolute bottom-1 left-1 text-white pl-3 pb-1 text-md font-bold">
                Rahmat Zulfitra
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/tutor-2.png"
                alt="tutor"
                width={200}
                height={200}
              />
              <p className="absolute bottom-1 left-1 text-white pl-3 pb-1 text-md font-bold">
                Muhammad Raja
              </p>
            </div>
          </div>

          <div className="flex gap-3 ml-24">
            <div className="relative">
              <Image
                src="/images/tutor-3.png"
                alt="tutor"
                width={200}
                height={200}
              />
              <p className="absolute bottom-1 left-1 text-white pl-3 pb-1 text-md font-bold">
                Amanda Chen
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/tutor-4.png"
                alt="tutor"
                width={200}
                height={200}
              />
              <p className="absolute bottom-1 left-1 text-white pl-3 pb-1 text-md font-bold">
                Muhammad Hafizh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex w-fit gap-2 self-end">
        <p className="underline">Lihat Tutor Lainnya</p>
        <Image src="/images/arrow.svg" width={30} height={30} alt="arrow" />
      </div> */}
    </div>
  );
};

export default Tutor;
