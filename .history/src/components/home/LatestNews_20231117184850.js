/** @format */

import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "../../Repository/Api";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  async function fetchHandler() {
    try {
      setLoad(true);
      getNews(setResponse);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  const Component = () => {

  }

  return (
    response?.length > 0 && (
     
    )
  );
};

export default LatestNews;
