import { createContext, useRef, useState } from "react";

export const MyContext = createContext(null);

function PageContextProvider({ children }) {
  const [data, setData] = useState({
    attribute1: "title",
    attribute2: 0,
    name: "react",
  });

  const inputRef = useRef(null);

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        inputRef,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default PageContextProvider;
