import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css"

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">WED</div>
          <WeatherIcon code="02d" size={40} color="#454348" />
          <div className="forecast-temperature">
            <span className="forecast-temp-max">25°</span>   <span className="forecast-temp-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  )
}