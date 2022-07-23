import React from "react";
import Recallfooter from "./Recallfooter";
import Turncard from "./Turncard";
import play from "../assets/play.png";

const deck = [
  {
    Q: "O que é JSX?",
    A: "Uma extensão de linguagem do JavaScript.",
  },
  {
    Q: "O React é __",
    A: "uma biblioteca JavaScript para construção de interfaces.",
  },
  { Q: "Componentes devem iniciar com __", A: "letra maiúscula." },
  { Q: "Podemos colocar __ dentro do JSX.", A: "expressões" },
  {
    Q: "O ReactDOM nos ajuda __",
    A: "interagindo com a DOM para colocar componentes React na mesma.",
  },
  {
    Q: "Usamos o npm para __",
    A: "gerenciar os pacotes necessários e suas dependências.",
  },
  {
    Q: "Usamos props para __",
    A: "passar diferentes informações para componentes.",
  },
  {
    Q: "Usamos estado (state) para __",
    A: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
  },
];

const shuffledDeck = [...deck];

(function shuffleDeck() {
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
})();

export default function Questions() {
  const [answerCount, setanswerCount] = React.useState(0);
  const [rightanswerCount, setrightanswerCount] = React.useState(0);
  const [checkAnswer, setcheckAnswer] = React.useState([]);
  const [deckLength] = React.useState(shuffledDeck.length);

  return (
    <>
      <div className="questions">
        {shuffledDeck.map((deck, index) => (
          <Question
            key={index}
            id={index + 1}
            question={deck.Q}
            answer={deck.A}
            answerCount={answerCount}
            setanswerCount={setanswerCount}
            rightanswerCount={rightanswerCount}
            setrightAnswerCount={setrightanswerCount}
            checkAnswer={checkAnswer}
            setcheckAnswer={setcheckAnswer}
            deckLength={deckLength}
          />
        ))}
      </div>
      <Recallfooter deckLength={deckLength}/>
    </>
  );
}

function Question({
  id,
  question,
  answer,
  answerCount,
  setanswerCount,
  rightanswerCount,
  setrightAnswerCount,
  checkAnswer,
  setcheckAnswer,
  deckLength,
}) {
  const [screen, setScreen] = React.useState(true);
  const [checkThisAnswer, setcheckThisAnswer] = React.useState("");
  
  return (
    <>
      {screen ? (
        <>
          <div className="question">
            <h3>Pergunta {id}</h3>
            <img src={play} onClick={() => setScreen(!screen)} />
          </div>
        </>
      ) : (
        <>
          <Turncard
            id={id}
            question={question}
            answer={answer}
            checkThisAnswer={checkThisAnswer}
            setcheckThisAnswer={setcheckThisAnswer}
            answerCount={answerCount}
            setanswerCount={setanswerCount}
            rightanswerCount={rightanswerCount}
            setrightAnswerCount={setrightAnswerCount}
            checkAnswer={checkAnswer}
            setcheckAnswer={setcheckAnswer}
            deckLength={deckLength}
          />
        </>
      )}
    </>
  );
}
