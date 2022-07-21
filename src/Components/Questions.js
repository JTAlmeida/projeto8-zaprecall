import React from "react";
import Firstquestion from "./Firstquestion";

const questions = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript." }, 
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces." }, 
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula." }, 
    { question: "Podemos colocar __ dentro do JSX.", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma." }, 
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências." }, 
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes." }, 
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente." },
]

const selectedQuestions = [];

const copyQuestions = [...questions];

for (let i = copyQuestions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copyQuestions[i], copyQuestions[j]] = [copyQuestions[j], copyQuestions[i]];
  }

for (let i = 0; i<4; i++){
    selectedQuestions.push(copyQuestions[i])
}

export default function Questions() {
  return (
    <div className="questions">
      {selectedQuestions.map((question, index) => (
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
