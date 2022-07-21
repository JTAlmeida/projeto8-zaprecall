export default function Landingpage({setScreen, screen}) {
  return (
    <div className="landing-page">
      <img src="assets/logo.png" />
      <h1>ZapRecall</h1>
      <button onClick={() => setScreen(!screen)}>Iniciar Recall!</button>
    </div>
  );
}
