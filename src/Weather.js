import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);


  function search() {
    const apiKey = "48c28c42760752f982c4dbf96a665b63";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.count(apiUrl);
    if (city.length === 0) {
      alert("Please enter a city");
    } else {
      axios.get(apiUrl).then(handleResponse, function () {
        alert('Requested city is not found. Please try again 😉 or ask Google');
      });
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
    setWeatherData({
      ready: true,
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
  if (weatherData.ready) {
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