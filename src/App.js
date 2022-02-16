import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <form className="form-inline" id="search-form">
          <input
            className="form-control"
            id="city-input"
            type="search"
            placeholder="Search city..."
            autofocus="on"
            autocomplete="off"
            aria-label="Search"
          />
          <button
            type="button"
            id="current-location"
            className="btn btn-primary"
          >
            <i className="fas fa-map-marker-alt"></i>
            <span id="user-current-location"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
