//imports
import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getCharacters } from "./redux/features/character/characterSlice";
import Main from "./components/Main";
import "./App.css";

const App = () => {

  //dispatch events
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <>
      <Main />
    </>
  );
};

export default App;
