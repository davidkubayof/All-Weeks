import { useState } from "react";

export default function Mood() {
  const [button, setButton] = useState({ mood: "Neutral", icon: "😐" });
  const [history, setHistory] = useState({ Happy: 0, Sad: 0, Mad: 0 });
  console.log(history);

  function getHistory() {
    const arr = [...history];
    console.log(arr);
  }

  return (
    <div className="flex flex-col rounded-2xl bg-amber-500 mt-20 m-auto w-100 h-100">
      <p className="mt-10 text-center text-2xl">Walcome To My App Mood 😐</p>
      <p className="text-center mt-10 text-4xl">
        I'm in mood {button.mood} {button.icon}
      </p>
      <p className="text-center mt-10 text-2xl">
        Happy {history.Happy}-😂  Sad {history.Sad}-🥲  Mad {history.Mad}-😤 
      </p>
      <button
        className="mt-38 bg-amber-700 hover:bg-amber-600"
        onClick={(e) => {
          setButton({ mood: "Neutral", icon: "😐" });
        }}
      >
        Neutral-😐
      </button>
      <button
        className=" bg-amber-700 hover:bg-amber-600"
        onClick={() => {
          setButton({ mood: "Happy", icon: "😂" });
          setHistory({...history , ['Happy']: history['Happy'] +1 });
        }}
      >
        Happy-😂
      </button>
      <button
        className=" bg-amber-700 hover:bg-amber-600"
        onClick={() => {
          setButton({ mood: "Sad", icon: "🥲" });
          setHistory({...history , ['Sad']: history['Sad'] +1 });
        }}
      >
        Sad-🥲
      </button>
      <button
        className="rounded-b-lg bg-amber-700 hover:bg-amber-600"
        onClick={() => {
          setButton({ mood: "Mad", icon: "😤" });
          setHistory({...history , ['Mad']: history['Mad'] +1 });
        }}
      >
        Mad-😤
      </button>
    </div>
  );
}
