/** @format */

import React, { useEffect, useState } from "react";
import DescriptionView from "./DescriptionView";
import { OUR_PRODUCT, WHO_WE_ARE } from "../../constants/constant";
import { getLimitedOffer } from "../../Repository/Api";

const Description = () => {
  const [ response , setResponse ] = useState([])

    function fetchHandler () {
      getLimitedOffer(setResponse , 'product')
    }

    useEffect(() => {
      fetchHandler()
    },[])

    console.log(response)


  return (
    <section className="MaxComponent" >

    {response?.map((i ,index) => (
      <DescriptionView
        src={i.bannerImage}
        title="
        content="Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse."
        desc="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
        btnName="EXPLORE PRODUCTS"
        link={"/shop"}
        key={index}
      />
    ))}

      <DescriptionView
        src={OUR_PRODUCT}
        title="Our Products"
        content="Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse."
        desc="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
        btnName="EXPLORE PRODUCTS"
        link={"/shop"}
      />
      <DescriptionView
        src={WHO_WE_ARE}
        title={"Who We Are"}
        content={"Shahina Hoja, RN, LE Aesthetic Nurse & Founder"}
        desc={
          "A licensed Aesthetic Nurse and founder of Shahina Hoja Aesthetics. Shahina became Board certified Skin therapist in 2017. 5 years later, and she still continues to grow more passionate about increasing self - love and confidence for all her clients!"
        }
        btnName={"VIEW MORE"}
        styles={"mb-6 text-left"}
        reverse={"flex-row-reverse"}
        link={"/aboutus"}
      />
      <DescriptionView
        title={"Our Partners"}
        desc={
          "Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
        }
        desc1={
          "Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim."
        }
      />
    </section>
  );
};

export default Description;
