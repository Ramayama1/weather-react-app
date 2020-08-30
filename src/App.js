import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
/*
import Forecast from "./Forecast";
*/
import CurrentDay from "./CurrentDay";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <NavBar />
        <CurrentDay />
        {/* <Forecast />*/}
        <Footer />
      </div>
    </div>
  );
}
