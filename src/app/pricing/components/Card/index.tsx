import { handleOpenPricing } from "@/app/helpers/openMediaSocial";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex py-3 px-60 my-20">
      <div
        className="flex bg-slate-500 w-full py-10 px-10 items-center justify-center gap-20"
        style={{
          borderRadius: "20px",
          background:
            "linear-gradient(225deg, rgba(0, 112, 108, 0.10) 0%, rgba(255, 130, 15, 0.10) 100%)",
        }}
      >
        <h3 className="text-xl font-bold max-w-md">
          Mulailah perjalanan belajar dengan King Expert. Lihat paket yang kami
          sediakan!
        </h3>

        <div className="flex flex-col justify-center items-center gap-4">
          <Image src="/images/sinar-top.svg" width={100} height={100} alt="-" />
          <button
            style={{
              borderRadius: "5px",
              border: "1px solid var(--base-white, #FFF)",
              background:
                "var(--gradient-danger-bg, linear-gradient(225deg, #FFC656 0%, #F16063 100%))",
            }}
            className="text-white font-bold px-8 py-2"
            onClick={handleOpenPricing}
          >
            Lihat Pricing
          </button>
          <Image
            src="/images/sinar-bottom.svg"
            width={100}
            height={100}
            alt="-"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
