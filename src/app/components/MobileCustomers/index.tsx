import DummyIcon from "../Customers/dummy-icon";

const MobileCustomers = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-mainGrey py-12 gap-10">
      <div className="flex flex-col items-center text-center gap-2 px-10">
        <h2 className="text-xl font-semibold font-serif">
          Pelanggan <span className="text-mainOrange">Kami</span>
        </h2>
        <p className="text-xs">
          King Expert sudah dipercaya menjadi tutor untuk ratusan siswa dan
          sekolah dari berbagai sekolah di Indonesia{" "}
        </p>
      </div>

      <div className="flex gap-10 overflow-scroll max-w-full px-5 no-scrollbar">
        <DummyIcon />
      </div>
    </div>
  );
};

export default MobileCustomers;
