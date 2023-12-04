/** @format */

import React from "react";
import Slider from "react-slick";

export const SkinTypeSlider = () => {
  const [response, setResponse] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
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

  return (
    response && (
      <>
        <div className="SkinType_Container">
          {response?.map((item, i) => (
            <ItemCard
              key={i}
              src={item.image}
              styles={"w-80 h-80 text-4xl"}
              type={item.name}
              link={`/skinTypeId/${item._id}/${item.name}`}
            />
          ))}
        </div>
      </>
    )
  );
};
