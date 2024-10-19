import Image from "next/image";

const images = [
  "/images/pelajaran-1.png",
  "/images/pelajaran-2.png",
  "/images/pelajaran-3.png",
  "/images/pelajaran-4.png",
  "/images/pelajaran-5.png",
];

const title = ["Fisika", "Geografi", "Sejarah", "Biologi", "Kimia"];

export const listImages = images.map((image, index) => (
  <div className="relative">
    <Image src={image} alt="pelajaran" width={150} height={250} />
    <p className="absolute bottom-1 left-3 font-serif text-white font-bold">
      {title[index]}
    </p>
  </div>
));
