import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";


export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);

  function search() {
    if (city.length === 0) {
      alert("Please enter a city");
    } else {
      const apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
      let unit = `metric`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
      console.count(apiUrl);
      axios.get(apiUrl).then(handleResponse);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      currTemp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      realFeel: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="border border-1 rounded-4">
          <form className="p-3" action="search" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                autoFocus="off"
                autoComplete="off"
                onChange={handleCity}
              />
              <button
                type="submit"
                className="search btn border btn-light text-muted">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <CurrentWeather info={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    )
  } else {
    search();
    return ("Loading...")
  }
}