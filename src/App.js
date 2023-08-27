import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});

  const apiKey = "6b0e492bae1d4405d7dd9606723f248c";
  const apiURL =
    "https://pro.openweathermap.org/data/2.5/forecast/climate?q=London&appid=6b0e492bae1d4405d7dd9606723f248c";
  const getWeatherDetails = () => {
    axios.get();
  };
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-3">
          <input type="text" className="form-control" />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weatherIcon"
            src="https://i.pinimg.com/564x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg"
          />

          <h5 className="weatherCity">Delhi</h5>
          <h6 className="weatherTemp">18°C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
