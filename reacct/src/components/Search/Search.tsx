import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { SearchType } from "../assets/Search/SearchType";
import { typingActions, weatherDescAction } from "../../store/store";
import Suggestion from "../Suggestion/Suggestion";
import {
  WeatherStateType,
  WeatherType,
} from "../assets/WeatherInterfaces/AllTypes";
import axios, { AxiosResponse } from "axios";
import { APP_KEY } from "../assets/Constants";
import WeatherCardSummary from "../WeatherCardSummary/WeatherCardSummary";

function Search() {
  const searchText = useSelector((state: SearchType) => state.search);
  const isPresentWeather = useSelector(
    (state: WeatherStateType) => state.weatherDesc.weatherArray
  );
  const dispatch = useDispatch();
  const style = {
    border: "1px solid #DADADA",
    outline: "none",
    padding: "10px 15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    margin: "0",
    alignItems: "center",
  };

  const handleSearch = (searchString: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(typingActions.populateContent(searchString.target.value));
  };

  const handleFocus = () => {
    dispatch(typingActions.typingStart());
  };

  const handleBlur = () => {
    setTimeout(() => {
      dispatch(typingActions.typingEnd());
    }, 300);
  };

  const handleSearchClick = () => {
    let result: WeatherType;
    const getWeatherDetails = `https://api.openweathermap.org/data/2.5/weather?q=${searchText.searchContent}&appid=${APP_KEY}`;
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${searchText.searchContent}&appid=${APP_KEY}`;
    if (searchText.searchContent.length > 0) {
      dispatch(typingActions.populateHistory(searchText.searchContent));
      axios
        .get(getWeatherDetails)
        .then((response: AxiosResponse) => {
          result = {
            weather: response.data.weather,
            main: response.data.main,
            dt: response.data.dt,
            name: response.data.name,
            sys: response.data.sys,
            list: [],
          };
          axios
            .get(forecastUrl)
            .then((response: AxiosResponse) => {
              result = {
                ...result,
                list: response.data.list,
              };
              dispatch(weatherDescAction.appendWeather(result));
              dispatch(weatherDescAction.appendToRecord(result));
              return result;
            })
            .catch((err) => console.log(err));
          return result;
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="search-container container">
        <div className="row justify-content-center align-items-center remove-style">
          <div className="col-sm-8">
            <TextField
              variant="standard"
              fullWidth
              className="search-bar"
              sx={style}
              placeholder="Search Location"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    {
                      <SearchIcon
                        className="search-icon"
                        onClick={handleSearchClick}
                      />
                    }
                  </InputAdornment>
                ),
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleSearch(event)
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>
        {searchText.isTyping === true && <Suggestion />}
      </div>
      {isPresentWeather.length > 0 && searchText.isTyping === true && (
        <WeatherCardSummary />
      )}
    </>
  );
}

export default Search;
