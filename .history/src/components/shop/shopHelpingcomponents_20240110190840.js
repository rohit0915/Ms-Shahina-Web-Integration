/** @format */

import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ProductCard from "./ProductCard";
import {
  getAllBrands,
  getAllNutrition,
  getProductType,
  getSkinCondition,
  getSkinType,
} from "../../Repository/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export const SkinType = () => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    response && (
      <>
        <div className="SkinType_Container  padingation_another MaxComponent">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            {...swiperConfig}
            modules={[Pagination, Autoplay, Keyboard]}
          >
            {response?.map((item, i) => (
              <SwiperSlide key={i}>
                <ItemCard
                  key={i}
                  src={item.image}
                  styles={"w-80 h-80 text-4xl"}
                  type={item.name}
                  link={`/skinTypeId/${item._id}/${item.name}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  );
};

export const ProductType = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getProductType(setResponse);
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      dynamicBullets: true,
    },
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  return (
    response && (
      <div className="SkinType_Container padingation_another MaxComponent">
        <Swiper {...swiperConfig} modules={[Pagination, Autoplay, Keyboard]}>
          {response?.map((item, i) => (
            <SwiperSlide key={i}>
              <ItemCard
                key={i}
                src={item.image}
                styles={"w-60 h-60"}
                baseType={item.name}
                link={`/productTypeId/${item._id}/${item.name}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export const Brands = ({ isBrand }) => {
  const [response, setResponse] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  useEffect(() => {
    getAllBrands(setResponse);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return isMobile
    ? response && (
        <div
          className={`${
            isBrand
              ? "flex flex-shrink-0 justify-center px-10  gap-10"
              : "SkinType_Container"
          }`}
        >
          {response?.map((item, i) => (
            <ItemCard
              key={i}
              src={item.image}
              isBrand={isBrand}
              styles={`${
                isBrand ? "w-60 h-60 text-2xl text-center" : "isBrand_container"
              }`}
              link={`/brandId/${item._id}/${item.name}`}
              largeCardType={item.name}
            />
          ))}
        </div>
      )
    : response && (
        <div
          className={`${
            isBrand
              ? "flex flex-shrink-0 justify-center px-10  gap-10"
              : "SkinType_Container"
          }`}
        >
          {response?.map((item, i) => (
            <ItemCard
              key={i}
              src={item.image}
              isBrand={isBrand}
              styles={`${
                isBrand ? "w-60 h-60 text-2xl text-center" : "isBrand_container"
              }`}
              link={`/brandId/${item._id}/${item.name}`}
              largeCardType={item.name}
            />
          ))}
        </div>
      );
};

export const SkinConditions = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getSkinCondition(setResponse);
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  return (
    response && (
      <div className="SkinType_Container padingation_another MaxComponent">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          {...swiperConfig}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {response?.map((item, i) => (
            <SwiperSlide key={i}>
              <ItemCard
                key={i}
                src={item.image}
                styles={"w-60 h-60"}
                baseType={item.name}
                link={`/skinConditionId/${item._id}/${item.name}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export const Nutrition = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAllNutrition(setResponse);
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    response && (
      <div className="SkinType_Container  padingation_another MaxComponent ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          {...swiperConfig}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {response?.map((item, i) => (
            <SwiperSlide key={i}>
              <ItemCard
                key={i}
                src={item.image}
                styles={"w-60 h-60"}
                nutritionType={item.name}
                link={`/nutritionId/${item._id}/${item.name}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export const Products = ({ data }) => {
  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  return (
    data?.length > 0 && (
      <div style={{ overflow: "hidden", maxWidth: "1400px", margin: "auto" }}>
        <Swiper
          {...swiperConfig}
          pagination={true}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {data?.map((item) => (
            <SwiperSlide key={item._id}>
              <ProductCard
                id={item._id}
                src={item?.productImages?.[0]?.image}
                title={item.name}
                price={
                  item.multipleSize === false
                    ? item.price
                    : item.sizePrice?.[0]?.price
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};
