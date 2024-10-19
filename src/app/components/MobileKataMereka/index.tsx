import Slider from "react-slick";
import { dataReview } from "./dataReview";
import Image from "next/image";

const MobileKataMereka = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col gap-8 px-5 py-12">
      <h2 className="text-xl font-semibold font-serif">
        Kata <span className="text-mainOrange">Mereka</span>
      </h2>

      <Slider {...settings}>
        {dataReview.map((review, index) => {
          return (
            <div className="px-5" key={index}>
              <div className="flex flex-col gap-10 p-10 shadow-md rounded-md">
                <div>
                  <Image
                    src={review.image}
                    alt="review"
                    width={150}
                    height={150}
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-md">{review.name}</h4>
                    <p className="italic text-xs">{review.award}</p>
                  </div>

                  <p className="max-w-xl text-xs">{review.review}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MobileKataMereka;
