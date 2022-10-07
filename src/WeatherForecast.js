import React, { useState, useEffect } from "react";
import "./Forecast.css"
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false)
  }, [props.coordinates])

  function forecastCall() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = "48c28c42760752f982c4dbf96a665b63";
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    console.count(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }
  if (ready) {
    console.count(ready);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 & index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDaily data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          }
          )}
        </div>
      </div>
    )
  } else {
    forecastCall();
    return ("Loading...")
  }
}