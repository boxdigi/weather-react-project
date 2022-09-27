import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState('celsius');

  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }
  function convertF(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }
  if (unit === 'celsius') {
    return (
      <div className="current-temp">{props.celsius}
        <span className="weatherUnits">
          <span className="units">°C <a href="/" onClick={convertF}>°F</a></span>
        </span>
      </div>
    )
  } else {
    let fahrenheitTemp = Math.round((props.celsius * 9 / 5) + 32)
    return (
      <div className="current-temp">{fahrenheitTemp}
        <span className="weatherUnits">
          <span className="units"><a href="/" onClick={showCelsius}>°C</a> °F</span>
        </span>
      </div>
    )
  }
}