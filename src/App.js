import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { publicRequest } from "./requestApi";
function App() {
  const [id, setId] = useState(1);
  const [char, setChar] = useState();

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get(`/characters/${id}`);
        setChar(res.data[0]);
      } catch (e) {
        console.log(e);
      }
    };
    getItems();
  }, [id]);
  return (
    <>
      <input type="number" onChange={(e) => setId(e.target.value)}></input>

      <h1>{char?.name}</h1>
      <img width={300} src={char?.img} />
    </>
  );
}

export default App;
