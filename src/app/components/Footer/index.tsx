import Image from "next/image";
import Description from "./Description";
import MenuAbout from "./MenuAbout";
import MenuLink from "./MenuLink";
import Address from "./Address";

const Footer = () => {
  return (
    <div className="flex justify-between px-20 py-20 bg-mainGrey">
      <Description />
      <MenuAbout />
      <MenuLink />
      <Address />
    </div>
  );
};

export default Footer;
