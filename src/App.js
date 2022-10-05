import React from "react";
import Weather from "./Weather";
import './index.css';

export default function App() {
  return (
    <div className="App-container">
      <Weather defaultCity="Kyiv" />
      <footer>
        <p>coded by <a href="https://teal-speculoos-2e6228.netlify.app/" target="_blank" rel="noreferrer">Hanna</a> and is <a href="https://github.com/boxdigi/weather-react-project" target="_blank" rel="noreferrer">open-sourced</a></p>
        <div class="d-flex justify-content-evenly">
          <p>inspired by <a href="https://dribbble.com/shots/2427734-Black-White-Weather" target="_blank" rel="noreferrer">Emil Widlund
          </a></p>
          <p>used <a href="https://openweathermap.org/">OpenWeatherMap</a></p></div>
      </footer>
    </div>
  );
}

