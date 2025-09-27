import React from "react";
import "./App.css";
import Images from "./Component/Images";
import PixabayState from "./Context/PixabayState";
import Buttons from "./Buttons";

function App() {
  return (
    <>
      <Buttons />
      <Images />
    </>
  );
}

export default App;
