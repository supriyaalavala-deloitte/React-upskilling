import React, { useState } from "react";
import "./WeatherDescription.scss";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation } from "react-router-dom";
import arrow from "./assets/arrow.png";
import degree from "./assets/degree.png";
import WeatherChart from "./WeatherChart/WeatherChart";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import { useDispatch, useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";
import { weatherDescAction } from "../../store/store";
import Notify from "../Notify/Notify";

function WeatherDescription() {
  const descriptions = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );
  const location = useLocation();
  const city = decodeURIComponent(location.pathname.slice(1));
  const cityDetails = descriptions.findCityAndDetails[city];
  const [cityWeatherDescription] = useState(cityDetails);

  const dispatch = useDispatch();
  const handleBtnClick = () => {
    let added = document.getElementById("addedtolist");
    let add = document.getElementById("addtolist");
    if (added) {
      added.style.display = "block";
      if (add && added.style.display === "block") {
        add.style.display = "none";
      }
    }
    dispatch(weatherDescAction.appendToBookMark(cityWeatherDescription.name));
  };

  const weatherPic =
    "https://openweathermap.org/img/wn/" +
    cityDetails.weather[0].icon +
    "@2x.png";

  return (
    <div>
      <div className="top-container">
        <div className="left-top">
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            <span>&lt; &nbsp;&nbsp;</span>
            <span className="backbtn" style={{ color: "#0170FE" }}>
              Back
            </span>
          </Link>
        </div>
        <div id="addtolist" className="right-top">
          <p onClick={handleBtnClick}>
            Add to List &nbsp;&nbsp;
            <AddIcon className="addicon" />
          </p>
        </div>
        <div id="addedtolist" className="button-change">
          <Notify cityDetails={cityDetails} />
        </div>
      </div>
      <div className="middle-container container">
        <div className="row justify-content-center no-style">
          <div className="col-sm-2 col-6 mt-5">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="weather-img" src={weatherPic} alt="Weather Icon" />
          </div>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col-sm-3">
            <p className="title-city">
              {cityWeatherDescription.name} &nbsp;
              <img id="arrow" src={arrow} alt="weather-arrow" />
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-1">
            <p className="degree-number">
              {(cityWeatherDescription.main.temp.valueOf() / 10)
                .toFixed(0)
                .toString()}
              <img id="degree-picture" src={degree} alt="degree" />
            </p>
          </div>
        </div>
      </div>
      <WeatherDetails cityDetails={cityWeatherDescription} />
      <WeatherChart
        cityName={cityWeatherDescription.name}
        cityDetails={cityWeatherDescription}
      />
    </div>
  );
}

export default WeatherDescription;
