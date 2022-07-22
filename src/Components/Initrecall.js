import Recallheader from "./Recallheader";
import Questions from "./Questions";

import React from "react";

export default function Initrecall() {
  const [countAnswers, setcountAnswers] = React.useState(0);

  return (
    <>
      <div className="recall-page">
        <Recallheader />

        <Questions countAnswers={countAnswers} setcountAnswers={setcountAnswers}/>
      </div>
    </>
  );
}
