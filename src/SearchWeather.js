import React from "react";
import FormattedDate from "./FormattedDate";

export default function SearchWeather(props) {

  return (
    <div className="Search">
      <div className="current-date"><FormattedDate date={props.info.date} /></div>
      <div className="Current">
        <img src={props.info.iconUrl} alt={props.info.description} />
        <h2 className="current-icon-description">{props.info.description}</h2>
        <h3 className="city-country text-uppercase">{props.info.city}, {props.info.country}</h3>
        <div className="current-temp">{props.info.currTemp}
          <span className="units active"><a href="/">°C </a></span>
          <span className="units"><a href="/">°F</a></span>
        </div>
        <div className="row row-cols-2 current-condition">
          <div className="col-sm">
            <i className="fa-solid fa-droplet"></i>
            humidity {props.info.humidity}%</div>
          <div className="col-sm">
            <i className="fa-solid fa-wind"></i> wind {props.info.wind} m/s</div>
          <div className="col-sm pt-2">
            <i className="fa-solid fa-cloud-arrow-up"></i> pressure {props.info.pressure} hPa</div>
          <div className="col-sm pt-2">
            <i className="fa-solid fa-hand"></i> feels like {props.info.realFeel}°</div>
        </div>
      </div>
    </div>
  )
}