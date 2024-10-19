import Image from "next/image";
import Slider from "react-slick";
import { dataReview } from "./dataReview";

const KataMereka = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col gap-8 px-28 py-12">
      <h2 className="text-3xl font-semibold font-serif">
        Kata <span className="text-mainOrange">Mereka</span>
      </h2>

      <Slider {...settings}>
        {dataReview.map((review, index) => {
          return (
            <div className="px-20" key={index}>
              <div className="flex gap-10 p-10 shadow-md rounded-md">
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
                    <h4 className="font-bold text-2xl">{review.name}</h4>
                    <p className="italic">{review.award}</p>
                  </div>

                  <p className="max-w-xl">{review.review}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default KataMereka;
