import { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

function PropsExample() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <Component1 setTitle={setTitle} />
      <Component2 title={title} />
    </div>
  );
}

export default PropsExample;
