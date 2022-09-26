import React from "react";
import Weather from "./Weather";
import './index.css';

export default function App() {
  return (
    <div className="App-container">
      <Weather />
      <footer>
        <p>coded by <a href="https://teal-speculoos-2e6228.netlify.app/" target="_blank" rel="noreferrer">Hanna</a> and is <a href="https://github.com/boxdigi/weather-react-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a></p>
        <p> inspired by <a href="https://dribbble.com/shots/2427734-Black-White-Weather" target="_blank" rel="noreferrer">Emil Widlund
        </a>
        </p>
      </footer>
    </div>
  );
}

