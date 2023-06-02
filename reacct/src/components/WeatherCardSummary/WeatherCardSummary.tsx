import React from "react";
import { Link } from "react-router-dom";
import "./WeatherCard.scss";
import image from "./assets/svg1.svg";
import { useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";
import { iconUrl } from "../assets/Constants";

function WeatherCardSummary() {
  const weatherCards = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );
  return (
    <div className="container overflow-hidden mt-1">
      <div className="row remove-style">
        {weatherCards.weatherArray.map((card) => {
          const imgUrl = iconUrl + card.weather[0].icon + "@2x.png";
          const rainAlert = card.weather[0].main === "Rain";
          return (
            <div
              key={card.dt.valueOf()}
              className="col-sm-3 col-12 card-main mt-5"
              style={{ paddingLeft: "1em" }}
            >
              <div className="row justify-content-between">
                <div className="col-sm-4 col-4 align-self-center">
                  <Link
                    to={`/${card.name}`}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <p className="rob-500">{card.name.toString()}</p>
                  </Link>
                </div>
                <div className="col-sm-2 col-2">
                  <Link to={`/${card.name}`} style={{ textDecoration: "none" }}>
                    <p className="arrow" style={{ color: "#000000" }}>
                      {" "}
                      <b>&gt;</b>
                    </p>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-between pt-1">
                <div className="col-sm-4 col-4">
                  <span className="degree">
                    {(Number(card.main.temp) / 10).toFixed(1).toString()}
                  </span>
                  <span className="degree-icon">&#176;</span>
                </div>
                <div className="col-sm-5 col-5 align-self-center">
                  <img height="70%" width="70%" src={imgUrl} alt="clouds" />
                </div>
              </div>
              <div className="row pt-4 justify-content-between pb-2">
                <div className="col-sm-5 col-5 align-self-center">
                  {rainAlert && (
                    <>
                      <span>
                        <img src={image} alt="svg" />
                      </span>
                      <span className="weather-footer">
                        &nbsp;&nbsp;WARNING
                      </span>
                    </>
                  )}
                </div>
                <div className="col-sm-5 col-5 align-self-center pt-3">
                  {rainAlert && (
                    <p className="weather-footer">Expecting Rainfall</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherCardSummary;
