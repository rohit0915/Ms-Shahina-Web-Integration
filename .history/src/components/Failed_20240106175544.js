/** @format */

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { orderFailed } from "../Repository/Api";

const Failed = () => {
  const { id } = useParams();

  useEffect(() => {
    orderFailed(id);
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="Thanks_Container">
      <p className="title">Failed !</p>
      <p className="desc">Order Failed due to Technical issue</p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default Failed;
