import React from "react";

export default function Firstquestion(props) {
  const [screen, setScreen] = React.useState(true);

  return (
    <>
      {screen ? (
        <div className="question-turned">
          <h3>{props.question}</h3>
          <img src="assets/setinha.png" onClick={() => setScreen(!screen)}></img>
        </div>
      ) : (
        <div className="question-turned">
          <h3>{props.answer}</h3>
          <button className="red-button">Não lembrei</button>
          <button className="orange-button">Quase não lembrei</button>
          <button className="green-button">Zap!</button>
        </div>
      )}
    </>
  );
}
