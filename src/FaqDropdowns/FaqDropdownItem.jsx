import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqItem">
      <div className="faqHeader" onClick={() => setIsOpen(!isOpen)}>
        <strong>{question}</strong>
        <button className={isOpen ? "faqToggle open pink" : "faqToggle"}>

          {isOpen ? <FaMinus /> : <FaPlus />}
          
        </button>
      </div>


      <div className={`faqContent ${isOpen ? "open" : ""}`}>
        <p className="faqAnswer">{answer}</p>
      </div>
    </div>
  );
};

export default FaqDropdown;
