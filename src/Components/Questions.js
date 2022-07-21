import React from "react";
import Firstquestion from "./Firstquestion";

const questions = [
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
    A:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
  },
];

const copyQuestions = [...questions];

const selectedQuestions = [];

(function shuffleFlashcards() {
  for (let i = copyQuestions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copyQuestions[i], copyQuestions[j]] = [copyQuestions[j], copyQuestions[i]];
  }
  for (let i = 0; i < 4; i++) {
    selectedQuestions.push(copyQuestions[i]);
  }
})();
console.log(selectedQuestions);

export default function Questions() {
  return (
    <div className="questions">
      {selectedQuestions.map((question, index) => (
        <Question
          key={index}
          id={index + 1}
          question={question.Q}
          answer={question.A}
        />
      ))}
    </div>
  );
}


function Question(props) {
  const [screen, setScreen] = React.useState(true);

  return (
    <>
      {screen ? (
        <div className="question">
          <h3>Pergunta {props.id}</h3>
          <img src="assets/play.png" onClick={() => setScreen(!screen)}></img>
        </div>
      ) : (
        <Firstquestion question={props.question} answer={props.answer}/>
      )}
    </>
  );
}
