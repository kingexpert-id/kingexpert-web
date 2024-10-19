import Image from "next/image";
import MethodItem from "./MethodItem";

const MetodeBelajar = () => {
  const methodList = [
    "Pre-Test",
    "Pembinaan Intensif",
    "Materi & Paket Soal",
    "Simulasi",
    "E-rapor & E-Sertifikat",
  ];

  return (
    <div className="flex flex-col px-40 gap-16 py-28">
      <h2 className="font-bold text-4xl font-serif">
        Metode <span className="text-mainOrange">Belajar</span>
      </h2>

      <div className="flex gap-32 px-10">
        <Image
          src="/images/metode.png"
          alt="metode"
          width={500}
          height={200}
          style={{ objectFit: "contain" }}
        />
        <div className="flex flex-col flex-1 gap-5">
          {methodList.map((method, idx) => (
            <MethodItem title={method} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetodeBelajar;
