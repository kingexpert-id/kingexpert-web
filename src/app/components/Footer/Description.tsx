import {
  handleCallWhatsapp,
  handleOpenInstagram,
} from "@/app/helpers/openMediaSocial";
import Image from "next/image";

const Description = () => {
  return (
    <div className="flex flex-col max-w-lg gap-5">
      <Image
        src="/images/main-logo.png"
        width={150}
        height={100}
        alt="main-logo"
      />

      <p className="text-sm font-light">
        King Expert adalah lembaga profesional dan berpengalaman di bidang
        pengembangan talenta siswa yang memberikan program pelatihan dan
        kompetisi siswa.
      </p>

      <div className="flex gap-3">
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

      <div>
        <button
          className="flex items-center w-125 h-49 p-4 pl-5 gap-3 bg-black text-white rounded-md"
          onClick={handleCallWhatsapp}
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
};

export default Description;
