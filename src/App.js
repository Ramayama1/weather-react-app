import React from "react";
import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
/*
import Forecast from "./Forecast";
*/
import CurrentDay from "./CurrentDay";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <CurrentDay />
      {/* <Forecast />*/}
      <Footer />
    </div>
  );
}
