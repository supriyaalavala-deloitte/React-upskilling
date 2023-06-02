import React, { useEffect, useState } from "react";
import "./BookMark.scss";
import NoLocation from "../NoLocation/NoLocation";
import { useDispatch, useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";
import WeatherDetails from "../WeatherDescription/WeatherDetails/WeatherDetails";
import WeatherChart from "../WeatherDescription/WeatherChart/WeatherChart";
import degree from "./assets/degree.png";
import arrow from "./assets/arrow.png";
import Carousel from "react-bootstrap/Carousel";
import { weatherDescAction } from "../../store/store";

function BookMark() {
  const bookMarkItems = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );
  const dispatch = useDispatch();
  const [controlVisible, setControlVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setControlVisible(false);
    }

    if (window.innerWidth > 600) {
      setControlVisible(true);
    }
  }, []);
  const handleRemove = (cityName: string) => {
    dispatch(weatherDescAction.popBookMark(cityName));
  };

  return (
    <>
      {bookMarkItems.bookMarks.length <= 0 ? (
        <NoLocation />
      ) : (
        <>
          <Carousel
            variant="dark"
            controls={controlVisible && bookMarkItems.bookMarks.length > 1}
            indicators={controlVisible && bookMarkItems.bookMarks.length > 1}
            interval={controlVisible ? 1000 : null}
          >
            {bookMarkItems.bookMarks.map((cityWeatherDescription) => {
              const weatherPic =
                "https://openweathermap.org/img/wn/" +
                bookMarkItems.findCityAndDetails[cityWeatherDescription]
                  .weather[0].icon +
                "@2x.png";
              return (
                <Carousel.Item key={cityWeatherDescription}>
                  <div>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-sm-7 col-12 ">
                          <div className="middle-container container">
                            <div className="row justify-content-center no-style pt-4">
                              <div className="col-sm-2 col-2"></div>
                              <div className="col-sm-2 d-block d-sm-none col-1"></div>
                              <div className="col-sm-2 d-block d-sm-none col-1"></div>
                              <div
                                className="col-sm-6 col-4"
                                style={{ textAlign: "center" }}
                              >
                                <img
                                  className="weather-img"
                                  src={weatherPic}
                                  alt="Weather Icon"
                                />
                              </div>

                              <div
                                className="col-sm-2 col-4 "
                                style={{ textAlign: "right" }}
                              >
                                <button
                                  type="button"
                                  id="removal"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    handleRemove(cityWeatherDescription)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                            <div className="row justify-content-center pt-1">
                              <div className="col-sm-3">
                                <p className="title-city">
                                  {" "}
                                  {cityWeatherDescription}&nbsp;
                                  <img id="arrow" src={arrow} alt="arrow" />
                                </p>
                              </div>
                            </div>
                            <div className="row justify-content-center">
                              <div className="col-sm-2 ">
                                <p className="degree-number">
                                  {" "}
                                  {(
                                    bookMarkItems.findCityAndDetails[
                                      cityWeatherDescription
                                    ].main.temp.valueOf() / 10
                                  )
                                    .toFixed(0)
                                    .toString()}
                                  <img
                                    id="degree-picture"
                                    src={degree}
                                    alt="degree"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <WeatherDetails
                            cityDetails={
                              bookMarkItems.findCityAndDetails[
                                cityWeatherDescription
                              ]
                            }
                          />
                          <WeatherChart
                            cityName={cityWeatherDescription}
                            cityDetails={
                              bookMarkItems.findCityAndDetails[
                                cityWeatherDescription
                              ]
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </>
      )}
    </>
  );
}

export default BookMark;
