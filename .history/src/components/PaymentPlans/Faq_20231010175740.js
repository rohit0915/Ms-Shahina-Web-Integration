import React, { useState } from "react";
import { getFaq } from "../../Repository/Api";

const Faq = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getFaq(setResponse);
  }, []);


  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-primary my-3">
        Frequently Asked Questions (FAQs)
      </h1>
      <div>
        <ul className="flex flex-col gap-5">
          {paragraphs.map((paragraph, index) => (
            <li key={index}>
              <div
                className="flex  justify-between items-center cursor-pointer"
                onClick={() => toggleParagraph(index)}
              >
                <span className=" px-5 w-11/12 border text-xl h-16 truncate shadow-lg flex items-center mx-auto">
                  <span
                    className={`transform text-lg  mr-5 text-lightGray ${
                      openParagraphIndex === index ? "rotate-0" : "rotate-180"
                    } transition-transform`}
                  >
                    &#9660;
                  </span>
                  {paragraph}
                </span>
              </div>
              {openParagraphIndex === index && (
                <p className="mt-4 w-11/12 mx-auto px-14">{paragraph}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
