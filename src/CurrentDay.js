import React from "react";
import "./CurrentDay.css";

export default function CurrentDay() {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weatherData = {
    city: "Dallas",
    temp: 72,
    description: "Partially cloudy",
    wind: 10,
    humidity: 20,
    imgUrl: "http://openweathermap.org/img/wn/11d@2x.png",
  };
  let day = days[date.getDay()];
  let minute = date.getMinutes();
  let hour = date.getHours();
  let time;
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (hour > 12) {
    hour = hour - 12;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    time = `${hour}:${minute} PM`;
  } else {
    time = `${hour}:${minute} AM`;
  }

  return (
    <div className="CurrentDay card text-center row topRow">
      <div className="card-body">
        <h5 className="card-title cityName">{weatherData.city}</h5>
        <p className="card-text currentDay">
          {day}, {time}
        </p>
        <div className="row">
          <h5 className="card-title col-7 currentTempCol">
            {weatherData.temp}°
          </h5>
          <p className="card-text col-5">
            <button className="tempButton selected row">C</button>
            <button className="tempButton row">F</button>
          </p>
        </div>
        <h5 className="card-title">
          <img className="currentIcon" src={weatherData.imgUrl} alt="" />
        </h5>
        <p className="currentDescription">{weatherData.description}</p>
        <p className="extraInfo">
          Wind: {weatherData.wind} km/h | Humidity: {weatherData.humidity}%
        </p>
      </div>
    </div>
  );
}
