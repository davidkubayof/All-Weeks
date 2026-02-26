// import GridLayout from "./components/Grid-layout"

import { GameHeader } from "./components/GameHeader";

const cardValues = []

function App() {
  return (
    <>
      <div className="app">
        <GameHeader score={3} moves={10} />
      </div>
      <div className="cards-grid border">
        {cardValues.map((card) => (
          <div>{card}</div>
        ))}
      </div>
      {/* <main>
        <div className="title">
          <p className="first_title">Find the</p>
          <p className="seconde_title">Secret Color!</p>
        </div>

        <div className="board border">
          {borad.map((num) => {
            <div key={num} className="cell border"></div>;
          })}
        </div>

        <p>Clicks:</p>
        <p>Keep Searching</p>
      </main> */}
      {/* <GridLayout /> */}
    </>
  );
}

export default App;
