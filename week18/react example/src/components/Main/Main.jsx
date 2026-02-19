import { useContext } from "react";
import { MyContext } from "../../contexts/PageContext";

function Main() {
  const { inputRef, data, setData } = useContext(MyContext);

  function setRandomNumber() {
    const randomNumber = Number(Math.random() * 100).toFixed();
    inputRef.current.value = randomNumber;
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={data.attribute1}
        onChange={(e) => {
          const text = e.target.value;
          setData((prev) => ({ ...prev, attribute1: e.target.value }));
        }}
      />
      <button onClick={() => setRandomNumber()}>random number</button>
    </div>
  );
}

export default Main;
