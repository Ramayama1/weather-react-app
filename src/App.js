import React, { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  let cityName = "dallas";
  let units = "imperial";
  let apiKey = "dd37c3810894c4465a983bfc0448362a";
  const [temp, changeTemp] = useState(null);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&&units=${units}`;
  axios.get(url).then(getWeather);
  function getWeather(response) {
    changeTemp(response.data.main.temp);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> The weather is {temp}</h1>
      </header>
    </div>
  );
}

export default App;
