import Slider from "react-slick";
import { dataTutor } from "./dataTutor";
import Image from "next/image";

const MobileTutor = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col justify-center w-screen gap-4 items-center px-8">
      <h2 className="font-bold text-xl font-serif">
        Tutor <span className="text-mainOrange">Kami</span>
      </h2>

      <p className="text-center text-sm">
        King Expert menyediakan tutor profesional yang memiliki pengalaman
        mengajar yang luas serta keunggulan di bidang olimpiade. Kamu dapat
        memperoleh panduan langsung dari para ahli yang telah terbukti membantu
        banyak siswa mencapai prestasi luar biasa. Bergabunglah sekarang dan
        rasakan perbedaan nyata dalam perjalanan belajar Kamu!{" "}
      </p>

      <div className="max-w-full h-80 items-center">
        <Slider {...settings}>
          {dataTutor.map((tutor, index) => {
            return (
              <div
                key={index}
                className="flex justify-center h-full mb-5 items-center"
              >
                <div className="relative flex items-center justify-center mt-6">
                  <Image
                    src={tutor.image}
                    alt="gallery-img"
                    width={200}
                    height={100}
                  />
                  <p className="absolute bottom-1 left-13 text-white pl-3 pb-1 text-md font-bold">
                    {tutor.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MobileTutor;
