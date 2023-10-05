import React from "react";
import GalleryCard from "./GalleryCard";
import { galleryImages } from "../../constants/constant";
import { Header } from "../../utils/helpingComponent";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate()
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
          <p style={{ width: "50%" }}>STEP 1 OF 3</p>
        </div>
        <p className="title">Select Services</p>
      </div>


      <Header heading={"Gallery"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-12">
        {galleryImages.map((item, index) => (
          <GalleryCard key={index} src={item.src} service={item.service} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
