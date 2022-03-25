//imports
import React, { useState, useEffect } from "react";
import { readData } from "./api/readData";
import Main from "./components/Main";
import './App.css'

const App = () => {
  //states
  const [characters, setCharacters] = useState([]);

  //useEffect
  useEffect(() => {
    readData().then((data) => {
      setCharacters(data.data);
      console.log(characters);
    });
  }, []);

  return (
    <Main
    characters={characters}
    />
  );
};

export default App;
