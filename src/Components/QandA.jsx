import React from "react";

function QandA({question, answer}) {
  return (
    <>
      
      <h6 className="question mt-5">{question}</h6>
      <p className="faq-answer">
        {answer}
      </p>
    </>
  );
}

export default QandA;
