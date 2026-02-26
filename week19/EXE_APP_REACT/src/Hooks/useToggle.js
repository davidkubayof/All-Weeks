import { useState } from "react";

const useToggle = (defaultBool = false) => {
    const [bool , setBool] =  useState(defaultBool)
    const setTrue = () => {
        setBool(true);
    }
      const setFalse = () => {
        setBool(false);
    }
    const toggle = () => {
        setBool(!bool);
    }
    return {bool, toggle, setTrue, setFalse};
};

export default useToggle;

                    