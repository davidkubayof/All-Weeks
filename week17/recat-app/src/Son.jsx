import React, { useState } from "react";

const Son = ({ onIncrement, onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    // אנחנו בודקים שלא שלחנו סתם מחרוזת ריקה
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue);
      setInputValue(""); // מאפסים את השדה אחרי השליחה
    }
  };
  return (
    <div>
      <input
        className="border"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Send to Dad</button>
      <input className="border" onChange={() => onIncrement(2)} />
      <button className="border" onClick={() => onIncrement(1)}>
        send
      </button>
      <input type="number" placeholder="ghraghiew" />
    </div>
  );
};

export default Son;
