/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchHeader = () => {
  const inputEl = useRef(null);
  const [exampleCategories, setexampleCategories] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [resultItems, setResultItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(keyword, 300);
  const [CategoryConst, setCategoryConst] = useState("All");
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
    //   const responseData = await ProductRepository.getCategories();
    //   if (responseData.length > 0) {
    //     setexampleCategories(responseData);
    //   }
    } catch (e) {
      console.log(e);
    }
  };

  function handleClearKeyword() {
    setKeyword("");
    setIsSearch(false);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  }

  function handlerNavigate(e) {
    e.preventDefault();
    Router.push(`/category/${CategoryConst}`);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      if (keyword) {
        const products = FilterCategoryProduct(keyword, CategoryConst);
        products.then((result) => {
          setLoading(false);
          setResultItems(result);
          setIsSearch(true);
        });
      } else {
        setIsSearch(false);
        setKeyword("");
      }
      if (loading) {
        setIsSearch(false);
      }
    } else {
      setLoading(false);
      setIsSearch(false);
    }
    fetchData();
  }, [debouncedSearchTerm]);

  // Views
  let productItemsView, clearTextView, loadingView, loadMoreView;
  if (!loading) {
    if (resultItems && resultItems.length > 0) {
      if (resultItems.length > 5) {
        loadMoreView = (
          <div className="ps-panel__footer text-center">
            <Link href={`/search/${keyword}`}>See all results</Link>
          </div>
        );
      }
      productItemsView = resultItems.map((product) => (
        <ProductSearchResult product={product} key={product.id} />
      ));
    } else {
      productItemsView = <p>No product found .</p>;
    }
    if (keyword !== "") {
      clearTextView = (
        <span className="ps-form__action" onClick={handleClearKeyword}>
          <i className="icon icon-cross2"></i>
        </span>
      );
    }
  } else {
    loadingView = (
      <span className="ps-form__action">
        <Spin size="small" />
      </span>
    );
  }

  function SearchByCategory(e) {
    setCategoryConst(e.target.value);
  }
  return (
    <form
      className="ps-form--quick-search"
      method="get"
      action="/"
      onSubmit={handleSubmit}
    >
      <div className="ps-form__categories">
        <select
          className="form-control"
          onChange={(e) => {
            SearchByCategory(e);
          }}
        >
          <option value={""}>All</option>
          {exampleCategories?.map((option) => (
            <>
              <option value={option._id} key={option.name}>
                {option.name}
              </option>
            </>
          ))}
        </select>
      </div>
      <div className="ps-form__input">
        <input
          ref={inputEl}
          className="form-control"
          type="text"
          value={keyword}
          placeholder="I'm shopping for..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        {clearTextView}
        {loadingView}
      </div>
      <button onClick={handlerNavigate}>Search</button>
      <div className={`ps-panel--search-result${isSearch ? " active " : ""}`}>
        <div className="ps-panel__content">{productItemsView}</div>
        {loadMoreView}
      </div>
    </form>
  );
};

export default SearchHeader;
