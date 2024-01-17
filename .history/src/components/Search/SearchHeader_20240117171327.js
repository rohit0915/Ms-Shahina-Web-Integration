/** @format */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { filterProduct } from "../../Repository/Api";

const SearchHeader = ({ isOpen, setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    filterProduct(searchTerm, setFilteredProducts);
  }, [searchTerm]);

  const uniqueNamedArray = [];
  const encounteredNames = new Set();

  filteredProducts.forEach((product) => {
    const { name } = product;
    if (!encounteredNames.has(name)) {
      encounteredNames.add(name);
      uniqueNamedArray.push(product);
    }
  });

  const handleNavigator = (link) => {
    navigate(link);
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        zIndex: 200,
      }}
      transition={{ duration: 0.3 }}
      exit={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      className="search_Header"
    >
      <div className="content">
        <div className="search-input">
          <img src="/asessts/navbar/search.png" alt="" />
          <input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {uniqueNamedArray?.map((i, index) => (
          <div className="Item" key={index}>
            <div className="sub-Item">
              <div className="media">
                <img
                  className="product-image"
                  src={i.productImages?.[0]?.image}
                  alt=""
                />

                <div className="media-body">
                  <div className="product-name">
                    <span onClick={() => handleNavigator(`/product/${i._id}`)}>
                      {i.name}
                    </span>
                    <Link to={`/product/${i._id}`}>{i.name}</Link>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SearchHeader;
