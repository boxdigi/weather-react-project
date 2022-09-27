import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function SearchWeather(props) {
  return (
    <div className="Search">
      <div className="current-date"><FormattedDate date={props.info.date} /></div>
      <div className="Current">
        <div className="weatherIcon"><WeatherIcon code={props.info.icon} size={64} color="#000" /></div>
        <h2 className="current-icon-description">{props.info.description}</h2>
        <h3 className="city-country text-uppercase">{props.info.city}, {props.info.country}</h3>
        <WeatherUnits celsius={props.info.currTemp} />
        <div className="row row-cols-2 current-condition">
          <div className="col">
            <i className="fa-solid fa-droplet"></i>
            humidity {props.info.humidity}%</div>
          <div className="col">
            <i className="fa-solid fa-wind"></i> wind {props.info.wind} m/s</div>
          <div className="col pt-2">
            <i className="fa-solid fa-cloud-arrow-up"></i> pressure {props.info.pressure} hPa</div>
          <div className="col pt-2">
            <i className="fa-solid fa-hand"></i> feels like {props.info.realFeel}°</div>
        </div>
      </div>
    </div>
  )
}