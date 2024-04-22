import React, { useState } from "react";
// import { FaAngleDown } from "react-icons/fa";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-1">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        {/* {accordionOpen ? <span>x</span> : <span>0</span>} */}
        <svg
          className="shrink-0 ml-8"
          height="33" viewBox="0 0 48 48" width="33" xmlns="http://www.w3.org/2000/svg"
        >
          
          <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" stroke-width="0" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/>
          <path d="M0-.75h48v48h-48z" fill="none" />
            
          
          {/* <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/>
          <path d="M0-.75h48v48h-48z" fill="none"/> */}
          {/*  className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/> */}
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm font-medium w-[84%] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
