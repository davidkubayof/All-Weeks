import { useEffect, useState } from "react";

const useLocalStorageState = (key, defaultvalue) => {
  const [value, setValue] = useState(defaultvalue);

  useEffect(() => {
    value && localStorage.setItem(key, value);
  }, [value]);

  const remove = () => localStorage.removeItem(key);
  
  return { value, setValue, remove };
};

export default useLocalStorageState;
