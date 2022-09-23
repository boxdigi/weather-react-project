import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1>Weather React App</h1>
      <div className="border border-1 rounded-4">
        <form className="p-3" action="search">
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
              aria-label="Search with one button"
              autoFocus="off"
              autoComplete="off"
            />
            <button
              type="button"
              className="search btn border btn-light text-muted">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <div className="App">
          <img src="/" alt="weather icon" />
          <h2 className="current-icon-description">partly cloudy</h2>
          <h3 className="city-country text-uppercase">Kyiv, UA</h3>
          <h1 className="current-temp">24°C</h1>
          <div className="row row-cols-3 current-condition">
            <div className="col"><i class="fa-solid fa-droplet"></i> humidity<br />50%</div>
            <div className="col"><i class="fa-solid fa-wind"></i> wind <br />3 m/s</div>
            <div className="col"><i class="fa-solid fa-temperature-three-quarters"></i> real feel <br />20° </div>
          </div>
        </div>
      </div>
      <footer>
        <p>coded by <a href="/">Hanna</a> and is <a href="/">open-sourced on GitHub</a> and hosted on Netlify</p>
        <p> inspired by <a href="https://dribbble.com/shots/2427734-Black-White-Weather">Emil Widlund
        </a>
        </p></footer>
    </div>
  );
}

