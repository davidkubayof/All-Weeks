import { useRef } from "react";
import "./App.css";
import useCounter from "./Hooks/useCounter";
import useCounterWithStep from "./Hooks/useCounterWithStep";
import useInput from "./Hooks/useInput";
import useLocalStorageState from "./Hooks/useLocalStorageState";
import useToggle from "./Hooks/useToggle";

function App() {
  // const { bool, toggle, setTrue, setFalse } = useToggle();
  // const { value, inc, dec, reset } = useCounter();
  // const { value, inc, dec, reset } = useCounterWithStep();
  // const { value, onChange, setValue, reset } = useInput();
  const { value, setValue, remove } = useLocalStorageState("name", "david");
  const inputRef = useRef();
  return (
    <>
      {/* <button onClick={toggle}>{bool ? "Hide" : "Show"}</button>
      <h1> {`${bool}`}</h1> */}
      {/* <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
      <p>{value}</p> */}

      {/* <input
        type="text"
        placeholder="inc"
        onChange={(e) => inc(e.target.value)}
      />
      <input
        type="text"
        placeholder="dec"
        onChange={(e) => dec(e.target.value)}
      />
      <button onClick={reset}>reset</button>
      <p>{value}</p> */}

      {/* <input type="text" placeholder="value..." value={value} onChange={onChange} />
      <p>{value}</p>
      <button onClick={reset}>reset</button>
       */}
      {/* <textarea type="text" placeholder="value..." value={value} onChange={onChange} ></textarea>
      <p>{value}</p>
      <button onClick={reset}>reset</button> */}

      <p>Hello: {value}</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Plese enter your name..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue('')
          remove();
          inputRef.current.value = "";
        }}
      >
        Clear
      </button>
    </>
  );
}

export default App;
