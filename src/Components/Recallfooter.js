export default function Recallfooter({answerCount}){
    console.log(answerCount);

      return (
        <div className="footer">
          <h2>{answerCount}/4 CONCLUÍDOS</h2>
        </div>
      )
    }