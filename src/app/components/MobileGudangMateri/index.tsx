import ImageCarousel from "./ImageCarousel";

const MobileGudangMateri = () => {
  return (
    <div className="flex flex-col gap-4 px-2 py-28 items-center overflow-hidden">
      <h2 className="text-xl font-semibold font-serif">
        Gudang <span className="text-mainOrange">Materi</span>
      </h2>
      <p className="max-w-2xl text-center mb-10 px-3 text-sm">
        Jelajahi berbagai materi pembelajaran yang tersedia secara gratis dan
        ambil langkah pertama menuju keunggulan dan kesuksesan Kamu
      </p>

      <ImageCarousel />
    </div>
  );
};

export default MobileGudangMateri;
