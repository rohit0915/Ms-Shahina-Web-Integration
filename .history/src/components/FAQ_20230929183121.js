/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const FAQ = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

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

      <div className="FAQ-Container">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={getItems()}
        />
      </div>
    </main>
  );
};

export default FAQ;
