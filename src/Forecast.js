import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast row bottowRow">
      <div className="card text-center col">
        <div className="card-body">
          <h5 className="card-title" id="time0">
            --
          </h5>
          <p className="card-text">
            ▽<span id="forecast0min">--</span> |
            <span id="forecast0max">--</span>△
          </p>
          <img
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt=""
            className="forecastIcon"
            id="icon0"
          />
        </div>
      </div>
      <div className="card text-center col">
        <div className="card-body">
          <h5 className="card-title" id="time1">
            --
          </h5>
          <p className="card-text">
            ▽<span id="forecast1min">--</span> |
            <span id="forecast1max">--</span>△
          </p>
          <img
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt=""
            className="forecastIcon"
            id="icon1"
          />
        </div>
      </div>
      <div className="card text-center col">
        <div className="card-body">
          <h5 className="card-title" id="time2">
            --
          </h5>
          <p className="card-text">
            ▽<span id="forecast2min">--</span> |
            <span id="forecast2max">--</span>△
          </p>
          <img
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt=""
            className="forecastIcon"
            id="icon2"
          />
        </div>
      </div>
      <div className="card text-center col">
        <div className="card-body">
          <h5 className="card-title" id="time3">
            --
          </h5>
          <p className="card-text">
            ▽<span id="forecast3min">--</span> |
            <span id="forecast3max">--</span>△
          </p>
          <img
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt=""
            className="forecastIcon"
            id="icon3"
          />
        </div>
      </div>
      <div className="card text-center col">
        <div className="card-body">
          <h5 className="card-title" id="time4">
            --
          </h5>
          <p className="card-text">
            ▽<span id="forecast4min">--</span> |
            <span id="forecast4max">--</span>△
          </p>
          <img
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt=""
            className="forecastIcon"
            id="icon4"
          />
        </div>
      </div>
    </div>
  );
}
