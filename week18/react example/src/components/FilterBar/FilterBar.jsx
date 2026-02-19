import { useEffect, useState } from "react";

function FilterBar() {
  const data = ["abcde", "efgh", "sdjkfnsdjkf", "omer", "abc"];

  const [filteredArray, setFilteredArray] = useState([...data]);

  const [text, setText] = useState("");

  useEffect(() => {
    setFilteredArray(data.filter((str) => str.includes(text)));
  }, [text]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <div>
        {filteredArray.map((str) => (
          <div>{str}</div>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
