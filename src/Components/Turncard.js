import React from "react";
import arrow from "../assets/setinha.png";
import Recallfooter from "./Recallfooter";
import right from "../assets/right.png";
import almostWrong from "../assets/almost-wrong.png";
import wrong from "../assets/wrong.png";

export default function Turncard({
  id,
  question,
  answer,
  checkThisAnswer,
  setcheckThisAnswer,
  answerCount,
  setanswerCount,
  rightanswerCount,
  setrightAnswerCount,
  checkAnswer,
  setcheckAnswer,
}) {
  const [screen, setScreen] = React.useState(true);

  if (checkThisAnswer === "wrong") {
    return (
      <>
        <div className="question wrong">
          <h3>Pergunta {id}</h3>
          <img src={wrong} />
        </div>
        <Recallfooter
          answerCount={answerCount}
          checkAnswer={checkAnswer}
          rightanswerCount={rightanswerCount}
        />
      </>
    );
  } else if (checkThisAnswer === "almost-wrong") {
    return (
      <>
        <div className="question almost-wrong">
          <h3>Pergunta {id}</h3>
          <img src={almostWrong} />
        </div>
        <Recallfooter
          answerCount={answerCount}
          checkAnswer={checkAnswer}
          rightanswerCount={rightanswerCount}
        />
      </>
    );
  } else if (checkThisAnswer === "right") {
    return (
      <>
        <div className="question right">
          <h3>Pergunta {id}</h3>
          <img src={right} />
        </div>
        <Recallfooter
          answerCount={answerCount}
          checkAnswer={checkAnswer}
          rightanswerCount={rightanswerCount}
        />
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
            <button
              className="red-button"
              onClick={() => {
                setcheckThisAnswer("wrong");
                setanswerCount((answerCount += 1));
                setcheckAnswer([...checkAnswer, { wrong }]);
              }}
            >
              Não lembrei
            </button>
            <button
              className="orange-button"
              onClick={() => {
                setcheckThisAnswer("almost-wrong");
                setanswerCount((answerCount += 1));
                setcheckAnswer([...checkAnswer, { almostWrong }]);
              }}
            >
              Quase não lembrei
            </button>
            <button
              className="green-button"
              onClick={() => {
                setcheckThisAnswer("right");
                setanswerCount((answerCount += 1));
                setrightAnswerCount((rightanswerCount += 1));
                setcheckAnswer([...checkAnswer, { right }]);
              }}
            >
              Zap!
            </button>
          </div>
        )}
      </>
    );
  }
}
