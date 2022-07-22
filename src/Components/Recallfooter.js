import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Recallfooter({
  answerCount,
  checkAnswer,
  rightanswerCount,
}) {
  function firstInObject(obj) {
    for (let key in obj) return obj[key];
  }

  if (answerCount === 4 && rightanswerCount === 4) {
    return (
      <>
        <div className="footer overlaid">
          <div>
            <img src={party} />
            <strong>Parabéns!</strong>
          </div>
          <p>Você não esqueceu de nenhum flashcard!</p>
          <h2>{answerCount}/4 CONCLUÍDOS</h2>
          <div className="answer-img">
            {checkAnswer.map((answer) => (
              <img src={firstInObject(answer)} />
            ))}
          </div>
        </div>
      </>
    );
  } else if (answerCount === 4 && rightanswerCount < 4) {
    return (
      <>
        <div className="footer overlaid">
          <div>
            <img src={sad} />
            <strong>Putz...</strong>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
          <h2>{answerCount}/4 CONCLUÍDOS</h2>
          <div className="answer-img">
            {checkAnswer.map((answer) => (
              <img src={firstInObject(answer)} />
            ))}
          </div>
        </div>
      </>
    );
  } else if (answerCount > 0) {
    return (
      <>
        <div className="footer overlaid">
          <h2>{answerCount}/4 CONCLUÍDOS</h2>
          <div className="answer-img">
            {checkAnswer.map((answer) => (
              <img src={firstInObject(answer)} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="footer">
        <h2>{answerCount || 0}/4 CONCLUÍDOS</h2>
      </div>
    );
  }
}
