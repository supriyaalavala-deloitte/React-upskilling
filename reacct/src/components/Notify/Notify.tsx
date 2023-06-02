import React from "react";
import "./Notify.scss";
import DoneIcon from "@mui/icons-material/Done";
import {
  WeatherStateType,
  WeatherType,
} from "../assets/WeatherInterfaces/AllTypes";
import { weatherDescAction } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

function Notify({ cityDetails }: { cityDetails: WeatherType }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(weatherDescAction.popBookMark(cityDetails.name));
  };

  return (
    <div className="flex-container ">
      <div className="flex-item-left">
        <button type="button" className="btn btn-success">
          Added to list &nbsp;&nbsp; <DoneIcon />
        </button>
      </div>
      <div className="flex-item-right">
        <button type="button" className="btn btn-danger" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Notify;
