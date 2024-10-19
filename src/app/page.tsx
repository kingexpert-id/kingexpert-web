"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Customers from "./components/Customers";
import WhyKingExpert from "./components/WhyKingExpert";
import MetodeBelajar from "./components/MetodeBelajar";
import Footer from "./components/Footer";
import useIsAndroid from "./helpers/useIsAndroid";
import MobileNavbar from "./components/MobileNavbar";
import MobileHeroSection from "./components/MobileHeroSection";
import MobileCustomers from "./components/MobileCustomers";
import MobileWhyKingExpert from "./components/MobileWhyKingExpert";
import MobileFooter from "./components/MobileFooter";
import Tutor from "./components/Tutor";
import CardHubungi from "./components/CardHubungi";
import GudangMateri from "./components/GudangMateri";
import KataMereka from "./components/KataMereka";
import Gallery from "./components/Gallery";
import MobileMetodeBelajar from "./components/MobileMetodeBelajar";
import MobileCardHubungi from "./components/MobileCardHubungi";
import MobileGudangMateri from "./components/MobileGudangMateri";
import MobileKataMereka from "./components/MobileKataMereka";
import MobileGallery from "./components/MobileGallery";
import MobileTutor from "./components/MobileTutor";

export default function Home() {
  const isAndroid = useIsAndroid();

  return (
    <main className="flex flex-col w-screen">
      {isAndroid ? (
        <>
          <MobileNavbar />
          <MobileHeroSection />
          <MobileCustomers />
          <MobileWhyKingExpert />
          <MobileMetodeBelajar />
          <MobileTutor />
          <MobileCardHubungi />
          <MobileGudangMateri />
          <MobileKataMereka />
          <MobileGallery />
          <MobileFooter />
        </>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <Customers />
          <WhyKingExpert />
          <MetodeBelajar />
          <Tutor />
          <CardHubungi />
          <GudangMateri />
          <KataMereka />
          <Gallery />
          <Footer />
        </>
      )}
    </main>
  );
}
