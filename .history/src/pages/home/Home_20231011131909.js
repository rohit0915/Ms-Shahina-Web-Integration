/** @format */

import React, { useEffect, useState } from "react";
import HeroSection from "../../components/home/HeroSection";
import Services from "../../components/home/Services";
import LimitedOffer from "../../components/home/LimitedOffer";
import ClientReviews from "../../components/home/ClientReviews";
import Description from "../../components/home/Description";
import LatestNews from "../../components/home/LatestNews";
import Pictures from "../../components/home/Pictures";
import OfferCard from "../../components/home/OfferCard";
import OfferBanner from "../../components/home/OfferBanner";
import ClientCarousel from "../../components/Carousel/ClientCarousel";

const Home = () => {
  const [isBanner, setBanner] = useState(false);
  useEffect(() => {
    setBanner(true);
  }, []);



  return (
    <div>
      <HeroSection />
      <Services />
      <LimitedOffer />
      <ClientReviews />
      <Testimonials show={true} />
      <Description />
      <LatestNews />
      <Pictures />
      <div className="fixed bottom-5 max-md:hidden w-[26rem] h-[8rem]  right-10 z-[100]">
        <OfferCard setBanner={setBanner} />
      </div>
      {isBanner && (
        <div className="fixed bottom-0 w-full h-[23rem] z-[200]">
          <OfferBanner setBanner={setBanner} />
        </div>
      )}
    </div>
  );
};

export default Home;