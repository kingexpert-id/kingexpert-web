import Image from "next/image";

interface Props {
  title: string;
}

const MethodItem = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-5 bg-white flex-1 rounded-xl px-5 py-2">
      <Image src="/images/check.png" alt="check" width={35} height={50} />
      <h4 className="font-bold text-xl font-serif">{title}</h4>
    </div>
  );
};

export default MethodItem;
