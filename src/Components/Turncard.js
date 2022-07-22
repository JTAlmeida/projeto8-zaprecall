import React from "react";
import arrow from "../assets/setinha.png";
import Recallfooter from "./Recallfooter";

let countAnswers = 1;
const buttons = [
  {class: "green-button", check: "right", text:"Zap!"},
  {class: "orange-button", check: "almost-wrong", text:"Quase não lembrei"},
  {class: "red-button", check: "wrong", text:"Não lembrei"}
];

export default function Turncard({
  id,
  question,
  answer,
  checkThisAnswer,
  setcheckThisAnswer,
}) {
  const [screen, setScreen] = React.useState(true);
  
  if (checkThisAnswer === "wrong") {
    return (
      <>
      <div className="question answered wrong">
        <h3>Pergunta {id} errou</h3>
      </div>
      <Recallfooter countAnswers={countAnswers++}/>
      </>
    );
  } else if (checkThisAnswer === "almost-wrong") {
    return (
      <>
      <div className="question answered almost-wrong">
        <h3>Pergunta {id} quase errou</h3>
      </div>
      <Recallfooter countAnswers={countAnswers++}/>
      </>
    );
  } else if (checkThisAnswer === "right") {
    return (
      <>
      <div className="question answered right">
        <h3>Pergunta {id} acertou</h3>
      </div>
      <Recallfooter countAnswers={countAnswers++}/>
      </>
    );
  } else {
    return (
      <>
        {screen ? (
          <div className="question-turned">
            <h3>{question}</h3>
            <img
              src={arrow}
              onClick={() => setScreen(!screen)}
            ></img>
          </div>
        ) : (
          <div className="question-turned">
            <h3>{answer}</h3>
            {buttons.map (button => (
              <button
              className={button.class}
              onClick={() => {setcheckThisAnswer(button.check);
              }}
            >
              {button.text}
            </button>
            ))}
          </div>
        )}
      </>
    );
  }
}
