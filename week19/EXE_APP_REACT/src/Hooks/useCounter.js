import { useState } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);
  const inc = () => setValue(value + 1);
  const dec = () => value && setValue(value - 1);
  const reset = () => setValue(0);

  return { value, inc, dec, reset };
};

export default useCounter;
