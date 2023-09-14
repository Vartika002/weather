import React from "react";
import ChooseCityComponent from "./ChooseCity";

const WeatherPage = () => {
  return (
    <>
      <div className="weatherPageWrap">
        <h1 className="heading">React Weather</h1>
        <div className="weatherSection">
          {/* <div className="rightSide"> */}
          <ChooseCityComponent />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
