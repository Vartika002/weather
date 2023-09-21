import React from "react";
import ChooseCityComponent from "./ChooseCity";

const WeatherPage = () => {
  return (
    <>
      <div className="weatherPageWrap">
        <h1 className="heading">React Weather</h1>
        <div className="weatherSection">
          <ChooseCityComponent />
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
