import { useState } from "react";

const useCounterWithStep = () => {

  const [value, setValue] = useState(0);
  const inc = (num) => setValue( Number(num));
  const dec = (num) =>  setValue(value - Number(num));
  const reset = () => setValue(0);

  return { value, inc, dec, reset };
};

export default useCounterWithStep;
