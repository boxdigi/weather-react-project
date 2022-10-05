import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  const apiKey = "481bc9bf97ae403a7ee70a4848c33bb8";
  let unit = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data)
  }

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