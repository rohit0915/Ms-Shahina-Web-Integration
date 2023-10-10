import React, { useState } from "react";
import { getFaq } from "../../Repository/Api";

const Faq = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getFaq(setResponse);
  }, []);


  const getItems = response?.map((i, index) => ({
    key: index,
    label: i.question,
    children: <p>{i.answer}</p>,
  }));

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-primary my-3">
        Frequently Asked Questions (FAQs)
      </h1>
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
    </div>
  );
};

export default Faq;
