export default function Recallfooter({ answerCount }) {
  if (answerCount === 4) {
    return (
      <div className="footer overlaid">
        <div>Parabéns, vc concluiu</div>
        <h2>{answerCount}/4 CONCLUÍDOS</h2>
      </div>
    );
  } else if (answerCount > 0) {
    return (
      <div className="footer overlaid">
        <h2>{answerCount}/4 CONCLUÍDOS</h2>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <h2>{answerCount || 0}/4 CONCLUÍDOS</h2>
      </div>
    );
  }
}
