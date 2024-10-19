import ImageCarousel from "./ImageCarousel";

const GudangMateri = () => {
  return (
    <div className="flex flex-col gap-4 px-28 py-28 items-center">
      <h2 className="text-3xl font-semibold font-serif">
        Gudang <span className="text-mainOrange">Materi</span>
      </h2>
      <p className="max-w-2xl text-center mb-10">
        Jelajahi berbagai materi pembelajaran yang tersedia secara gratis dan
        ambil langkah pertama menuju keunggulan dan kesuksesan Kamu
      </p>

      <ImageCarousel />
    </div>
  );
};

export default GudangMateri;
