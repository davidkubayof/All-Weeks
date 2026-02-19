import { useContext } from "react";
import { MyContext } from "../../contexts/PageContext";

function Header() {
  const myContext = useContext(MyContext);

  const { data } = myContext;

  const { attribute1, attribute2, attribute3 } = data;

  return (
    <div>
      <div>{attribute1}</div>
      <div>{attribute2}</div>
      <div>{attribute3}</div>
    </div>
  );
}

export default Header;
