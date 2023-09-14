import React from "react";

const CurrentWeatherInfoCard = ({ data }) => {
  return (
    <>
      <div className="weatherDataCard">
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Current Weather Information
        </p>
        {/* <div> */}
        <h6 className="cityName">{data?.name}</h6>
        <h6 className="temp">
          {data?.weather && data?.weather.length > 0 && (
            <img
              alt="Weather Icon"
              className="currentWeatherIcon"
              src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            />
          )}
          {(data?.main?.temp - 273.15).toFixed(2)} °C
        </h6>
        {/* </div> */}

        <div className="right-align">
          <div className="data-row">
            <h6 className="data-item ">
              <i
                className="fa fa-tint"
                style={{ color: "#0aa8ca", marginRight: "10px" }}
              ></i>
              Humidity {data?.main?.humidity} %
            </h6>
            <h6 className="data-item ">
              <i
                className="fa-solid fa-wind"
                style={{ color: "#0aa8ca", marginRight: "10px" }}
              ></i>
              Wind {data?.wind?.speed} kph
            </h6>
            <h6 className="data-item">
              <i
                className="fa fa-tachometer"
                aria-hidden="true"
                style={{ color: "#0aa8ca", marginRight: "10px" }}
              ></i>
              Pressure {data?.main?.pressure} hPa
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeatherInfoCard;
