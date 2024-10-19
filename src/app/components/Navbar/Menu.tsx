import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex gap-5">
      <Link className="text-gray-500" href="/about">
        About
      </Link>
      <Link className="text-gray-500" href="/pricing">
        Pricing
      </Link>
      <Link className="text-gray-500" href="/events">
        Events
      </Link>
    </div>
  );
};

export default Menu;
