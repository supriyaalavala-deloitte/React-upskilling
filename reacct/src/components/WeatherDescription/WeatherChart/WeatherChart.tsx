import React from "react";
import "./WeatherChart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  WeatherStateType,
  WeatherType,
} from "../../assets/WeatherInterfaces/AllTypes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
};

function WeatherChart({
  cityName,
  cityDetails,
}: {
  cityName: string;
  cityDetails?: WeatherType;
}) {
  const chartData = useSelector((state: WeatherStateType) => state.weatherDesc);
  const dataDisplay = chartData.findCityAndDetails[cityName].list;

  const labels: Array<String> = [];
  const temperatures: Array<number> = [];

  dataDisplay.forEach((reading) => {
    temperatures.push(reading.main.temp);
  });

  dataDisplay.forEach((reading) => {
    labels.push(new Date(reading.dt * 1000).toDateString());
  });

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Sunrise",
        data: temperatures,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="bottom-container container pt-4">
      <div className="row chart-details justify-content-center pt-4">
        <div className="col-sm-5">
          <p className="main-title">SUNRISE &#38; SUNSET</p>
          <div className="col-12 d-block d-sm-none pb-2">
            <Line data={data} options={options} />
          </div>
          <p className="day-length ">
            Length of day:{" "}
            <span style={{ color: "#2C2C2C" }}>
              {cityDetails &&
                new Date(cityDetails.sys.sunrise * 1000)
                  .toLocaleTimeString()
                  .split(":")[0]}
              {"H "}
              {cityDetails &&
                new Date(cityDetails.sys.sunrise * 1000)
                  .toLocaleTimeString()
                  .split(":")[1]}
              {"M"}
            </span>
          </p>
          <p className="remaining-length">
            Remaining daylight:{" "}
            <span style={{ color: "#2C2C2C" }}>
              {cityDetails &&
                Math.abs(
                  new Date(cityDetails.sys.sunset).getHours() -
                    new Date().getHours()
                )}
              {"H"}{" "}
              {cityDetails &&
                Math.abs(
                  new Date(cityDetails.sys.sunset).getMinutes() -
                    new Date().getMinutes()
                )}
              {"M"}
            </span>
          </p>
        </div>
        <div className="col-sm-6 d-none d-sm-block">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default WeatherChart;
