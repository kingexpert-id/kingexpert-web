import AnimatedNumber from "../MobileWhyKingExpert/AnimatedNumber";

const WhyKingExpert = () => {
  return (
    <div className="flex justify-center w-screen px-24 gap-10 py-20">
      <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-36 h-36 justify-center items-center">
        <h2 className="h-fit color text-white font-bold text-4xl">
          <AnimatedNumber number={20} />+
        </h2>
        <p className="h-fit text-white text-sm">Tutor</p>
      </div>

      <div className="h-36 w-0.5 bg-black " />

      <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-36 h-36 justify-center items-center">
        <h2 className="h-fit color text-white font-bold text-4xl">
          <AnimatedNumber number={50} />+
        </h2>
        <p className="h-fit text-white text-sm">Mitra</p>
      </div>

      <div className="h-36 w-0.5 bg-black " />

      <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-36 h-36 justify-center items-center">
        <h2 className="h-fit color text-white font-bold text-4xl">
          <AnimatedNumber number={500} />+
        </h2>
        <p className="h-fit text-white text-sm">Siswa</p>
      </div>
    </div>
  );
};

export default WhyKingExpert;
