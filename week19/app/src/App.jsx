import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./comps/Cell";

function App() {
  const [isSecret, setIsSecret] = useState(false);


  const [randomNum] = useState(Math.floor(Math.random() * (101 - 0)));
  const [count, setCount] = useState(0);
  const cards = [];

  for (let i = 0; i < 100; i++) {
    cards.push(i);
  }

  return (
    <>
      <div className="flex gap-4 justify-center mt-10">
        <p className="text-white text-3xl font-extrabold">Find the</p>
        <p className="text-[#e06163] text-3xl font-extrabold">Secret Color!</p>
      </div>
      <div className="border-gray-500 grid grid-cols-10 grid-rows-10 w-150 h-150 m-auto mt-10">
        {cards.map((i, index) => (
          <Cell
            randomNum={randomNum}
            id={index}
            key={index}
            setCount={setCount}
            count={count}
            setIsSecret={setIsSecret}
            isSecret={isSecret}
   

          />
        ))}
      </div>
      <div className="flex items-center flex-col mt-5">
        <p className="text-white font-extrabold text-3xl ">
          Clicks:{randomNum} {count}
        </p>
        {!isSecret ? (
          <p className="text-[#c7b355] font-extrabold text-3xl">
            Keep Searching!
          </p>
        ) : (
          <>
            <p className="text-[#5ec755bb] font-extrabold text-3xl">WINER</p>
            <button className="text-white bg-gray-500 text-2xl hover:bg-gray-400" onClick={()=>{location.reload()}}>NEW GAME</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
