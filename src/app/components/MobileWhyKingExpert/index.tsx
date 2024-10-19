import AnimatedNumber from "./AnimatedNumber";

const MobileWhyKingExpert = () => {
  return (
    <div className="flex justify-center w-screen gap-4 py-20">
      <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-20 h-20 justify-center items-center">
        <h2 className="h-fit color text-white font-bold text-xl">
          <AnimatedNumber number={20} />+
        </h2>
        <p className="h-fit text-white text-sm">Tutor</p>
      </div>

      <div className="h-20 bg-slate-900 " />

      <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-20 h-20 justify-center items-center">
        <h2 className="h-fit color text-white font-bold text-xl">
          <AnimatedNumber number={50} />+
        </h2>
        <p className="h-fit text-white text-sm">Mitra</p>
      </div>

      <div className="h-20 bg-slate-900 " />

      <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-20 h-20 justify-center items-center">
        <h2 className="h-fit color text-white font-bold text-xl">
          <AnimatedNumber number={500} />+
        </h2>
        <p className="h-fit text-white text-sm">Siswa</p>
      </div>
    </div>
  );
};

export default MobileWhyKingExpert;
