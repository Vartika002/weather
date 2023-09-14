import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrentWeatherInfoCard from "../CurrentWeatherCard";
import WeekInfoCardComponnet from "../WeekInfoCard";

const ChooseCityComponent = () => {
  const [data, setData] = useState({});
  const [inputCity, setInputCitty] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const apiKey = "6b0e492bae1d4405d7dd9606723f248c";

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res?.data);
        setData(res?.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert("City not found. Please enter a valid city name.");
        } else {
          console.log("error", err);
        }
      });
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  const handleChangeCityInput = (e) => {
    setInputCitty(e.target.value);
  };

  useEffect(() => {
    getWeatherDetails("delhi");
  }, [inputCity]);

  return (
    <>
      <div className="cityMenu">
        <div className="searchIcon">
          <input
            type="text"
            className="form-control"
            placeholder="Search City..."
            onChange={handleChangeCityInput}
            value={inputCity}
          />
          <i class="fa fa-search search-icon" onClick={handleSearch}></i>
        </div>
      </div>
      <CurrentWeatherInfoCard data={data} />
      <WeekInfoCardComponnet data={data} />
    </>
  );
};
export default ChooseCityComponent;
