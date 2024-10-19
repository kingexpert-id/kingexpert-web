import Image from "next/image";
import MethodItem from "./MethodItem";

const MobileMetodeBelajar = () => {
  const methodList = [
    "Pre-Test",
    "Pembinaan Intensif",
    "Materi & Paket Soal",
    "Simulasi",
    "E-rapor & E-Sertifikat",
  ];

  return (
    <div className="flex flex-col px-5 gap-8 pb-20">
      <h1 className="text-black text-xl font-inter font-bold font-serif text-center ">
        Metode <span className="text-mainOrange">Belajar</span>
      </h1>
      <div className="flex items-center justify-center">
        <Image
          src="/images/metode.png"
          alt="metode"
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="text-xs text-center">
        King Expert menyediakan berbagai paket yang bisa dimanfaatkan oleh siswa
        sebagai bagian dari pelatihan intensif yang dilakukan{" "}
      </p>

      <div className="flex flex-col flex-1 gap-5">
        {methodList.map((method, idx) => (
          <MethodItem title={method} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default MobileMetodeBelajar;
