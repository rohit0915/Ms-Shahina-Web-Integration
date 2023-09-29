/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const FAQ = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


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
