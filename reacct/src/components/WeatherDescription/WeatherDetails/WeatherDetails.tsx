import React, { useState } from "react";
import "./WeatherDetails.scss";
import { WeatherType } from "../../assets/WeatherInterfaces/AllTypes";
import { useLocation } from "react-router-dom";

interface CSSStyle {
  fontWeight: string;
  fontSize: string;
}

function WeatherDetails({ cityDetails }: { cityDetails: WeatherType }) {
  const [time] = useState(new Date(cityDetails.dt.valueOf() * 1000));

  let fontStyleTitle: CSSStyle;
  let fontStyleReading: CSSStyle;

  const location = useLocation();

  if (location.pathname === "/") {
    fontStyleReading = {
      fontSize: "1em",
      fontWeight: "700",
    };

    fontStyleTitle = {
      fontSize: "1em",
      fontWeight: "500",
    };
  } else {
    fontStyleReading = {
      fontSize: "1.5em",
      fontWeight: "700",
    };

    fontStyleTitle = {
      fontSize: "1.5em",
      fontWeight: "500",
    };
  }

  return (
    <div className="third-container container">
      <div className="row weather-details justify-content-between pt-4">
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            TIME
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            {time.getHours() + " : " + time.getMinutes()}
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            PRESSURE
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            {cityDetails.main.pressure.toString()}
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            % RAIN
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            58%
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            HUMIDITY
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            {cityDetails.main.humidity.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
