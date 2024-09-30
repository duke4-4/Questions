import React, { useState } from 'react';
import './App.scss'
function QuestionAnswerApp() {
  const [questions, setQuestions] = useState([
    { id: "1", question: "Where is Vic Falls?", answer: "Zimbabwe" },
    { id: "2", question: "Where is Grand Canyon?", answer: "Arizona, USA" },
    { id: "3", question: "Where is Mt Everest?", answer: "Himalayas, China" },
   

  ]);

  const handleButtonClick = (clickedQuestion) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === clickedQuestion.id
          ? { ...question, isVisible: !question.isVisible }
          : { ...question, isVisible: false }
      )
    );
  };

  return (
    <>
      <div className="outerbox">
        <div className="box">
          <h1>Where is it?</h1>
          {questions.map((question, index) => (
            <button key={index} onClick={() => handleButtonClick(question)}>
              {question.isVisible ? question.answer : question.question}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuestionAnswerApp;