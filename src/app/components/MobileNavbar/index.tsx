import Image from "next/image";
import { useState } from "react";
import MenuList from "./MenuList";
import { useRouter } from "next/navigation";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center h-53 py-3 px-7 justify-between z-10">
      <div>
        <Image
          src="/images/main-logo.png"
          alt="main-logo"
          width={100}
          height={100}
          onClick={() => router.push("/")}
        />
      </div>

      <div
        className={`transition-transform duration-500 ease-in-out transform ${
          menuOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        {!menuOpen ? (
          <div
            className="flex flex-col items-center justify-center w-8 h-6 gap-0.5 mt-3 transition-all"
            onClick={toggleMenu}
          >
            <div className="w-full h-0.5 bg-mainOrange mb-1 rounded-md"></div>
            <div className="w-full h-0.5 bg-mainOrange mb-1 rounded-md"></div>
            <div className="w-full h-0.5 bg-mainOrange mb-1 rounded-md"></div>
          </div>
        ) : (
          <Image
            src="/images/closeIcon.png"
            width={25}
            height={30}
            alt="close"
            onClick={toggleMenu}
          />
        )}
      </div>

      <MenuList menuOpen={menuOpen} toggle={toggleMenu} />
    </div>
  );
};

export default MobileNavbar;
