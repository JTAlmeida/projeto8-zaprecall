import React from "react";
import arrow from "../assets/setinha.png";
import Recallfooter from "./Recallfooter";
import right from "../assets/right.png";
import almostWrong from "../assets/almost-wrong.png";
import wrong from "../assets/wrong.png";

const buttons = [
  { class: "green-button", check: "right", text: "Zap!" },
  { class: "orange-button", check: "almost-wrong", text: "Quase não lembrei" },
  { class: "red-button", check: "wrong", text: "Não lembrei" },
];

export default function Turncard({
  id,
  question,
  answer,
  checkThisAnswer,
  setcheckThisAnswer,
  answerCount,
  setanswerCount,
}) {
  const [screen, setScreen] = React.useState(true);

  if (checkThisAnswer === "wrong") {
    return (
      <>
        <div className="question wrong">
          <h3>Pergunta {id}</h3>
          <img src={wrong}/>
        </div>
        <Recallfooter answerCount={answerCount}/>
      </>
    );
  } else if (checkThisAnswer === "almost-wrong") {
    return (
      <>
        <div className="question almost-wrong">
          <h3>Pergunta {id}</h3>
          <img src={almostWrong}/>
        </div>
        <Recallfooter answerCount={answerCount}/>
      </>
    );
  } else if (checkThisAnswer === "right") {
    return (
      <>
        <div className="question right">
          <h3>Pergunta {id}</h3>
          <img src={right}/>
        </div>
        <Recallfooter answerCount={answerCount}/>
      </>
    );
  } else {
    return (
      <>
        {screen ? (
          <div className="question-turned">
            <h3>{question}</h3>
            <img src={arrow} onClick={() => setScreen(!screen)}></img>
          </div>
        ) : (
          <div className="question-turned">
            <h3>{answer}</h3>
            {buttons.map((button) => (
              <button
                className={button.class}
                onClick={() => {
                  setcheckThisAnswer(button.check);
                  setanswerCount(answerCount+=1);
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
