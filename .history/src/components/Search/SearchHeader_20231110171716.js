/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchHeader = ({ isOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Debouncing logic
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Filter function to be debounced
  const handleFilter = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const debouncedFilter = debounce(handleFilter, 500);

  useEffect(() => {
    debouncedFilter(searchTerm);
  }, [searchTerm, debouncedFilter]);

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
          <input type="search" />
        </div>

        <div className="Item">
          <div className="sub-Item">
            <div className="media">
              <img className="product-image" src="/Image/45.png" alt="" />

              <div className="media-body">
                <div className="product-name">
                  <Link to={`/product/`}>
                    ELFBAR 600V2 Mojito Disposable Vape - 20mg
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="Item">
          <div className="sub-Item">
            <div className="media">
              <img className="product-image" src="/Image/45.png" alt="" />

              <div className="media-body">
                <div className="product-name">
                  <Link to={`/product/`}>
                    ELFBAR 600V2 Mojito Disposable Vape - 20mg
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchHeader;
