import Slider from "react-slick";
import { dataGallery } from "./dataGallery";
import Image from "next/image";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col gap-10 px-28 py-14 items-center mb-20">
      <h2 className="text-3xl font-semibold font-serif">Galeri</h2>

      <div className="max-w-full h-80">
        <Slider {...settings}>
          {dataGallery.map((image, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center h-full mb-5"
              >
                <div className="flex items-center">
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

export default Gallery;
