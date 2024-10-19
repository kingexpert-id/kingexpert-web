import { useState } from "react";
import Slider from "react-slick";
import { listImages } from "./listImages";

const ImageCarousel = ({ slidesToShow = 5 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    beforeChange: (current: number, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = listImages.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={
            idx === imageIndex
              ? "activeSlide"
              : "transform scale-75 transition-transform duration-300 opacity-50"
          }
          key={idx}
        >
          <div className="flex justify-center">{image}</div>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="max-w-screen-xl">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <Slider {...settings}>{templateImages}</Slider>
    </div>
  );
};

export default ImageCarousel;
