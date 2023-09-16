import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const WeekInfoCardComponnet = ({ data }) => {
  const [value, setValue] = useState({});

  const currentDate = moment();

  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    daysOfWeek.push(currentDate.format("ddd"));
    currentDate.add(1, "days");
  }
  const apiKey = "6b0e492bae1d4405d7dd9606723f248c";
  const { coord } = data;
  const latitude = coord?.lat;
  const longitude = coord?.lon;
  let cnt = 7;
  const apiURL = (latitude, longitude) =>
    `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&cnt=${cnt}&appid=${apiKey}`;

  const fetchData = (latitude, longitude) => {
    axios
      .get(apiURL(latitude, longitude))
      .then((res) => {
        console.log("response", res);
        setValue(res?.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    if (latitude && longitude) {
      fetchData(latitude, longitude);
    }
  }, [latitude, longitude]);
  return (
    <>
      <div className="weekDataCard">
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Weekly Weather Info
        </p>
        <span className="cardList">
          {value?.list?.map((ele, index) => (
            <span key={index} className="dayItem">
              <span className="dayName">
                {daysOfWeek[index]}
                {ele?.weather && ele?.weather?.length > 0 && (
                  <div>
                    <img
                      alt="weekly Icon"
                      className="weekWeatherIcon"
                      src={`https://openweathermap.org/img/wn/${ele?.weather[0]?.icon}@2x.png`}
                    />
                  </div>
                )}
              </span>
              <span className="weeklyDescription">{ele?.weather[0]?.main}</span>
              <br />
              <span className="weeklyTemp">
                {Math.round(ele?.main?.temp_min - 273.5)}°/{" "}
                {Math.round(ele?.main?.temp_max - 273.5)}°
              </span>
              <br />
            </span>
          ))}
        </span>
      </div>
    </>
  );
};

export default WeekInfoCardComponnet;
