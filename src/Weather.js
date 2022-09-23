import React from "react";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="border border-1 rounded-4">
        <Search />
        <div className="Current">
          <img src="https://i.pinimg.com/originals/f9/8e/1b/f98e1bc90e8f78e9c6893ca4ab2f99d9.png" alt="weather icon" />
          <h2 className="current-icon-description">partly cloudy</h2>
          <h3 className="city-country text-uppercase">Kyiv, UA</h3>
          <div className="current-temp">24
            <span className="units active"><a href="/">°C </a></span>
            <span className="units"><a href="/">°F</a></span>
          </div>

          <div className="row row-cols-2 current-condition">
            <div className="col"><i class="fa-solid fa-droplet"></i> humidity 50%</div>
            <div className="col"><i class="fa-solid fa-temperature-arrow-up"></i> max 25°</div>
            <div className="col"><i class="fa-solid fa-wind"></i> wind 3 m/s</div>
            <div className="col"><i class="fa-solid fa-temperature-arrow-down"></i> min 15°</div>
          </div>
        </div>
      </div>
    </div>
  )
}