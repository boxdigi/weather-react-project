import React, { useState } from "react";
import Search from "./Search";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setReady(true);
    console.log(response);
    console.log(response.data.main);
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      currTemp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      realFeel: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description
    });
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="border border-1 rounded-4">
          <Search />
          <div className="Current">
            <img src="https://i.pinimg.com/originals/f9/8e/1b/f98e1bc90e8f78e9c6893ca4ab2f99d9.png" alt="weather icon" />
            <h2 className="current-icon-description">{weatherData.description}</h2>
            <h3 className="city-country text-uppercase">{weatherData.city}, {weatherData.country}</h3>
            <div className="current-temp">{weatherData.currTemp}
              <span className="units active"><a href="/">°C </a></span>
              <span className="units"><a href="/">°F</a></span>
            </div>
            <div className="row row-cols-2 current-condition">
              <div className="col">
                <i className="fa-solid fa-droplet"></i>
                humidity {weatherData.humidity}%</div>
              <div className="col">
                <i className="fa-solid fa-wind"></i> wind {weatherData.wind} m/s</div>
              <div className="col">
                <i className="fa-solid fa-hand"></i> feels like {weatherData.realFeel}°</div>
              <div className="col">
                <i className="fa-solid fa-cloud-arrow-up"></i> pressure {weatherData.pressure} hPa</div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    const apiKey = "b0de966a5f210c2492572cc7759b218c";
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return ("Loading")
  }
}