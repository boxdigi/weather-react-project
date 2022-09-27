import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayShowers,
  WiNightShowers,
  WiThunderstorm,
  WiSnowflakeCold,
  WiFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": <WiDaySunny size={props.size} color={props.color} />,
    "01n": <WiNightClear size={props.size} color={props.color} />,
    "02d": <WiDayCloudy size={props.size} color={props.color} />,
    "02n": <WiNightCloudy size={props.size} color={props.color} />,
    "03d": <WiCloud size={props.size} color={props.color} />,
    "03n": <WiCloud size={props.size} color={props.color} />,
    "04d": <WiCloudy size={props.size} color={props.color} />,
    "04n": <WiCloudy size={props.size} color={props.color} />,
    "09d": <WiRain size={props.size} color={props.color} />,
    "09n": <WiRain size={props.size} color={props.color} />,
    "10d": <WiDayShowers size={props.size} color={props.color} />,
    "10n": <WiNightShowers size={props.size} color={props.color} />,
    "11d": <WiThunderstorm size={props.size} color={props.color} />,
    "11n": <WiThunderstorm size={props.size} color={props.color} />,
    "13d": <WiSnowflakeCold size={props.size} color={props.color} />,
    "13n": <WiSnowflakeCold size={props.size} color={props.color} />,
    "50d": <WiFog size={props.size} color={props.color} />,
    "50n": <WiFog size={props.size} color={props.color} />,
  };

  return (
    <div>{codeMapping[props.code]}</div>

  );
}