"use client";

import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import useIsAndroid from "../helpers/useIsAndroid";
import Card from "./components/Card";
import MobileCard from "./components/MobileCard";

const Events = () => {
  const isAndroid = useIsAndroid();

  return (
    <main className="flex flex-col w-screen">
      {isAndroid ? (
        <>
          <MobileNavbar />
          <MobileCard />
          <MobileFooter />
        </>
      ) : (
        <>
          <Navbar />
          <Card />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Events;
