import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDaily(props) {
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div className="ForecastDaily">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} color="#454348" />
      <div className="forecast-temperature">
        <span className="forecast-temp-max">{maxTemp}°</span>   <span className="forecast-temp-min">{minTemp}°</span>
      </div>
    </div>
  )
}