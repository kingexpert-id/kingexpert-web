import Slider from "react-slick";
import { dataGallery } from "../Gallery/dataGallery";
import Image from "next/image";

const MobileGallery = () => {
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
    <div className="flex flex-col gap-10 px-5 py-14 items-center mb-20 justify-center">
      <h2 className="text-3xl font-semibold font-serif">Galeri</h2>

      <div className="max-w-full h-80 items-center">
        <Slider {...settings}>
          {dataGallery.map((image, index) => {
            return (
              <div
                key={index}
                className="flex justify-center h-full mb-5 items-center"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={image}
                    alt="gallery-img"
                    width={300}
                    height={100}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MobileGallery;
