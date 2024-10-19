import Image from "next/image";
import Menu from "./Menu";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex w-full justify-between h-20 items-center border-b px-24">
      <Image
        src="/images/main-logo.png"
        alt="main-logo"
        width={110}
        height={50}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <Menu />
      <div />
    </div>
  );
};

export default Navbar;
