/** @format */

import React, { useEffect } from "react";
import HeroSection from "../../components/home/HeroSection";
import Services from "../../components/home/Services";
import LimitedOffer from "../../components/home/LimitedOffer";
import Description from "../../components/home/Description";
import LatestNews from "../../components/home/LatestNews";
import Testimonials from "../../components/PaymentPlans/Testimonials";
import GallarySlider from "../../components/Sliders/GallarySlider";
import { useSelector } from "react-redux";
import { isBannerOpen } from "../../store/BannerSlice";

const Home = () => {
  const isOpen = useSelector(isBannerOpen);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
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
          leave our spa loving their skin. That's why over 310 people have given
          us a 5-star rating on Google!
        </p>
        <img src="/asessts/google-review.png" />
      </div>

      <Testimonials />
      <div className="mb-14"></div>
      <Description />
      <LatestNews />
      {/* <div className="fixed bottom-5 max-md:hidden w-[26rem] h-[8rem]  right-10 z-[100]">
        <OfferCard />
      </div> */}
      <GallarySlider />
      {/* {isOpen && (
        <div className="fixed bottom-0 w-full h-[20rem] z-[200] Bootom_Cormer">
          <OfferBanner />
        </div>
      )} */}
    </div>
  );
};

export default Home;
