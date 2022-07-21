import Recallheader from "./Recallheader";
import Questions from "./Questions";
import Recallfooter from "./Recallfooter";

export default function Initrecall() {
  return (
    <>
      <div className="recall-page">
        <Recallheader />

        <Questions />

        <Recallfooter />
      </div>
    </>
  );
}
