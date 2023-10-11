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

      <div className="flex flex-col  gap-10 items-center Review_Title_Container "   >
        <h1 className="font-medium text-3xl text-primary mb-2">
          Client Reviews
        </h1>
        <p className=" text-center w-[48rem] leading-7">
          We are very proud of the service we provide and stand by every product
          we carry. We work hard to address our client's needs and have them
          leave our spa loving their skin. That's why over 400 people have given
          us a 5-star rating on Google!
        </p>
        <div className="w-48 h-24">
          <img
            className="w-full h-full object-cover"
            src="/asessts/google-review.png"
            alt="google-review"
          />
        </div>
      </div>
      <Testimonials />
      <div className="mb-14" ></div>
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
