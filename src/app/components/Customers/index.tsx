import Image from "next/image";
import DummyIcon from "./dummy-icon";

const Customers = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-mainGrey py-20 gap-10">
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-3xl font-semibold font-serif">
          Pelanggan <span className="text-mainOrange">Kami</span>
        </h2>
        <p>
          King Expert sudah dipercaya menjadi tutor untuk ratusan siswa dan
          sekolah dari berbagai sekolah di Indonesia{" "}
        </p>
      </div>

      <div className="flex gap-40 overflow-scroll max-w-full px-28 no-scrollbar">
        <DummyIcon />
      </div>
    </div>
  );
};

export default Customers;
