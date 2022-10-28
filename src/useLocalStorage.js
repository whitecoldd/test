import React, { useState, useEffect } from "react";

function getSavedValue(key, initVal) {
  const savedVal = JSON.parse(localStorage.getItem(key));
  if (savedVal) return savedVal;

  if (initVal instanceof Function) return initVal();
  return initVal;
}

const useLocalStorage = (key, initVal) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initVal);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  
  }, [value])
  

  return [value, setValue];
};

export default useLocalStorage;
