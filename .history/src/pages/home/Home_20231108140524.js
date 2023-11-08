/** @format */

import React, { useEffect, useState } from "react";
import HeroSection from "../../components/home/HeroSection";
import Services from "../../components/home/Services";
import LimitedOffer from "../../components/home/LimitedOffer";
import Description from "../../components/home/Description";
import LatestNews from "../../components/home/LatestNews";
import Pictures from "../../components/home/Pictures";
import OfferCard from "../../components/home/OfferCard";
import OfferBanner from "../../components/home/OfferBanner";
import Testimonials from "../../components/PaymentPlans/Testimonials";
import GallarySlider from "../../components/Sliders/GallarySlider";

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

      <div className="Review_Title_Container ">
        <h1>Client Reviews</h1>
        <p>
          We are very proud of the service we provide and stand by every product
          we carry. We work hard to address our client's needs and have them
          leave our spa loving their skin. That's why over 400 people have given
          us a 5-star rating on Google!
        </p>
        <img src="/asessts/google-review.png" />
      </div>

      <div style={{ width: "100%", overflow: "hidden" }}>
        <Testimonials />
      </div>
      <div className="mb-14"></div>
      <Description />
      <LatestNews />
      <Pictures />
      <div className="fixed bottom-5 max-md:hidden w-[26rem] h-[8rem]  right-10 z-[100]">
        <OfferCard setBanner={setBanner} />
      </div>
      <GallarySlider />
      {isBanner && (
        <div className="fixed bottom-0 w-full h-[20rem] z-[200] Bootom_Cormer">
          <OfferBanner setBanner={setBanner} />
        </div>
      )}
    </div>
  );
};

export default Home;
