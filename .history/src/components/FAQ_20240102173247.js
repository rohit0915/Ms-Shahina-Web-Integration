/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { getFaq } from "../Repository/Api";

const FAQ = () => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    getFaq(setResponse);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const getItems = response?.map((i, index) => ({
    key: index,
    label: i.question,
    children:  <View_description /> ,
  }));

  return (
    <main className="service_details_page">
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div style={{ width: "10%" }}>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p style={{ textTransform: "uppercase" }}>
          FAQ’s ( Frequently Asked Questuons )
        </p>
      </div>

      {response && (
        <div className="FAQ-Container">
          <Collapse
            bordered={false}
            defaultActiveKey={["0"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            items={getItems}
          />
        </div>
      )}
    </main>
  );
};

export default FAQ;
