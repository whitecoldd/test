import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { publicRequest } from "./requestApi";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useFetch";
import useFetch from "./useFetch";
function App() {
  const [id, setId] = useState(1);
  const [name, setName] = useLocalStorage('name', '');
  const [char, setChar] = useState();
  const {data, error, loading} = useFetch(`/characters/${id}`)
  return (
    <>
      <input type="number" onChange={(e) => setId(e.target.value)}></input>

      <h1>{data?.name}</h1>
      <img width={300} src={data?.img} />

      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    </>
  );
}

export default App;
