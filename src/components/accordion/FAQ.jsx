import React,{Fragment} from "react";
import Accordion from "./Accordion";


const FAQ = () => {
  return (
    <Fragment>
      <div className="px-4 py-2 bg-transparent rounded-xl border border-blue-700 mb-5 font-semibold">
        <Accordion
          title="Can education flashcards be used for all age groups?"
          answer="yes, Education flashcards can be tailored to different age groups and learning levels. There are
          flashcards designed for pre-schoolers, elementary school students, high school students, and
           even for college-level adult learners"
        />
      </div>
      <div className="px-4 py-2 bg-transparent rounded-xl border border-blue-700 mb-5 font-semibold">
        <Accordion
          title="How do education flashcards work?"
          answer="Education flashcards work by presenting a question or prompt on one side and the
          corresponding answer or information on the other. Users can review the cards repeatedly,
          reinforcing their memory and enhancing learning through repetition."
        />
      </div>
      <div className="px-4 py-2 bg-transparent rounded-xl border border-blue-700 mb-5 font-semibold">
        <Accordion
          title="Can education flashcards be used for test preparation?"
          answer="Absolutely, Flashcards are excellent tool for test preparation, allowing students to review key
          concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge
          before exams."
        />
      </div>
    </Fragment>
  );
};

export default FAQ;