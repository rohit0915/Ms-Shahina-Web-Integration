/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";

const Schedule1 = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  const items = [
    {
      key: "1",
      label: "FEATURED",
      children:div>

      </div>,
    },
    {
      key: "2",
      label: "BODY",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "TREATMENTS",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "CONSULTATIONS",
      children: "Content of Tab Pane 3",
    },
    {
      key: "5",
      label: "FACIALS",
      children: "Content of Tab Pane 3",
    }
  ];

  const firstItem = () => {
    return (
        <div className="FirstItem">

        </div>
    )
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 1 OF 3</p>
        </div>
        <p className="title">Select Services</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
        <div className="right_div"></div>
      </div>
    </>
  );
};

export default Schedule1;
