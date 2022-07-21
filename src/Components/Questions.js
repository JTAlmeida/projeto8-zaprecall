import React from "react";

const questions = [
    {  }, 
    {  }, 
    {  }, 
    {  },
];

export default function Questions() {
  return (
    <div className="questions">
      {questions.map((question, index) => (
        <Question key={index} id={index+1} />
      ))}
    </div>
  );
}

function Question({ id }) {
    const [click, setClick] = React.useState(false);

  return (
    <div className="question">
      <h3>Pergunta {id}</h3>
      <img src="assets/play.png"></img>
    </div>
  );
}
