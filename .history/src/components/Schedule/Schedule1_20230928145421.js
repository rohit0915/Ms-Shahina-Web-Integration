/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from 'antd';

const Schedule1 = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  

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
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div className="right_div"></div>
      </div>
    </>
  );
};

export default Schedule1;
