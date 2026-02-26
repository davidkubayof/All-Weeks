import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./comps/Cell";
import Header from "./comps/Header";

const style ="border-white border bg-[#32415e] hover:bg-[#484c5700] flex justify-center items-center";

function App() {
  const [cliked ,setCliked] = useState(0)
  const [random, setRandom] = useState([]);
  const [cards, setCards] = useState(
    Array.from({ length: 80 }, (_, i) => ({ id: i, className: style })),
  );

  let randomNum = [];
  useEffect(() => {
    randomNumbers();
    setRandom(randomNum);
  }, []);

  function randomNumbers() {
    for (let i = 0; i < 2; i++) {
      let n = Math.floor(Math.random() * (80 - 0 + 1)) + 0;
      randomNum.push(n);
    }
  }
  function startNewGame() {
    randomNumbers();
    setRandom(randomNum);
    setCards(
      Array.from({ length: 80 }, (_, i) => ({ id: i, className: style })),
    );
  }
  return (
    <>
      <main>
        <Header />

        <div className=" border-gray-500 grid grid-cols-10 grid-rows-8 w-150 h-110 m-auto mt-10 text-2xl font-bold gap-1">
          {cards.map((i, index) => (
            <Cell
              className={i.className}
              random={random}
              cardId={index}
              bord={cards}
              cell={i}
              key={index}
              setCards={setCards}
              setCliked={setCliked}
              cliked={cliked}
            />
          ))}
        </div>
        <div className="flex items-center flex-col mt-5">
          <p className="text-white font-extrabold text-3xl ">
            Clicks:{cliked} {random.length}
          </p>
          <div className="flex gap-10 text-white">
            {random.map((num, index) => (
              <div key={index} className="hover:border">
                {num}
              </div>
            ))}
          </div>
          {cliked !== random.length ? (
            <p className="text-[#c7b355] font-extrabold text-3xl">
              Keep Searching!
            </p>
          ) : (
            <>
              <p className="text-[#5ec755bb] font-extrabold text-3xl">WINER</p>
            </>
          )}
          <button
            className="text-white bg-[#2e4a22a7] w-60 h-10 text-2xl hover:bg-[#2e4a22]   0"
            onClick={startNewGame}
          >
            Restart Game
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
