import { handleOpenInstagram } from "@/app/helpers/openMediaSocial";
import Image from "next/image";

const Description = () => {
  return (
    <div className="flex flex-col max-w-lg gap-5">
      <Image
        src="/images/main-logo.png"
        width={100}
        height={100}
        alt="main-logo"
      />

      <div className="flex gap-2">
        <div>
          <Image
            src="/images/location.png"
            alt="location"
            width={40}
            height={30}
          />
        </div>

        <p className="text-xs">
          Gedung AD Premier Office Park Lantai 9, Jl. TB Simatupang No. 5,
          Kelurahan Ragunan, Kecamatn Pasar Minggu, Jakarta Selatan
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <Image src="/images/sms.png" alt="location" width={20} height={30} />
        </div>

        <p className="text-xs">kingexperteducation@gmail.com</p>
      </div>

      <div className="flex gap-3 justify-center">
        <Image
          src="/images/instagram.png"
          alt="twitter"
          width={30}
          height={30}
          onClick={handleOpenInstagram}
        />

        <Image
          src="/images/linkedin.png"
          alt="twitter"
          width={30}
          height={30}
        />

        <Image
          src="/images/twitterr.png"
          alt="twitter"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Description;
