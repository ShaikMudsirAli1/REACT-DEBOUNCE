import { useEffect, useState } from "react";

// useDeboucne function.

const useDeboucne = (value, timeout = 500) => {
  const [debounceValue, setDebounceValue] = useState("value");

  // USEEFFECT HOOK.
  useEffect(() => {
    const id = setTimeout(() => {
      console.log("setting new timeout");
      setDebounceValue(value);
    }, timeout);

    // CLEAN UP THE ID HERE BY USING CLEAN UP FUNCTION
    return () => {
      console.log("clearing the timeout");
      clearTimeout(id);
    };
  }, [value, timeout]);

  return debounceValue;
};

export default useDeboucne;
