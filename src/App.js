import logo from "./logo.svg";
import "./App.css";
import { useAsyncMemo } from "use-async-memo";
import React, { useState } from "react";
import { publicRequest } from "./requestApi";
function App() {
  const [id, setId] = useState(1);
  const [char, setChar] = useState();

  const newChar = useAsyncMemo(async () => {
    const res = await publicRequest.get(`/characters/${id}`);
    setChar(res.data[0]);
    console.log(char);
  }, [id]);
  console.log(newChar);
  return (
    <>
      <input type="number" onChange={(e) => setId(e.target.value)}></input>

      <h1>{char?.name}</h1>
      <img width={300} src={char?.img} />
    </>
  );
}

export default App;
