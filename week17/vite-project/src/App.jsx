import { createContext } from "react";
import Headar from "./Headar";
import Nav from './Nav'

export const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Headar />
      <Nav/>
    </ThemeContext.Provider>
  );
}

export default App;
