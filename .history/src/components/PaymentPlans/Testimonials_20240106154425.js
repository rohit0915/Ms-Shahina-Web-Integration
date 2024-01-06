/** @format */

import React, { useEffect, useState } from "react";
import { getReviews } from "../../Repository/Api";
import { View_description } from "../../Helper/Herlper";

// Import necessary Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const Testimonials = () => {
  const [response, setResponse] = useState([]);
  const [isAutoplay, setIsAutoPlay] = useState(true);
  const [autoplayConfig, setAutoPlayConfig] = useState({
    delay: 100,
    disableOnInteraction: true,
  });

  function fetchHandler() {
    getReviews(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    
  })


  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  return (
    response?.length > 0 && (
      <div
        className="testimonial_container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          pagination={true}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          keyboard={{ enabled: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={autoplayConfig}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {response?.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="Testimonial-Box">
                <h5>{i.userName}</h5>
                <View_description description={i.description} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default Testimonials;
