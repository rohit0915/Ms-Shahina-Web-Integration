/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";

import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
    style: panelStyle
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
    style: panelStyle
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
    style: panelStyle
  }
];


const FAQ = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }


  return (
    <main className="service_details_page">
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}></p>
        </div>
        <p className="title" style={{ textTransform: "uppercase" }}>
          FAQ’s ( Frequently Asked Questuons )
        </p>
      </div>

      <div className="FAQ-Container">

    

      </div>
    </main>
  );
};

export default FAQ;
