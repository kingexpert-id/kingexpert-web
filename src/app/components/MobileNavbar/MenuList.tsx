import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  menuOpen: boolean;
  toggle: () => void;
}

const MenuList = ({ menuOpen, toggle }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col gap-8 justify-center items-center text-center list-none transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ padding: "30px 50px" }}
    >
      <Image
        src="/images/main-logo.png"
        alt="main-logo"
        width={150}
        height={150}
        onClick={() => router.push("/")}
      />

      <div className="flex flex-col gap-6">
        <Link href="/about">
          <h3 className="text-xl">About</h3>
        </Link>
        <Link href="/pricing">
          <h3 className="text-xl">Pricing</h3>
        </Link>
        <Link href="/events">
          <h3 className="text-xl">Events</h3>
        </Link>
      </div>

      <Image
        src="/images/closeIcon.png"
        alt="close"
        width={30}
        height={30}
        className="absolute top-10 right-10"
        onClick={toggle}
      />
    </div>
  );
};

export default MenuList;
