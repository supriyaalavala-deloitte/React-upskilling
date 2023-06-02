import { CloudType } from "./chartTypes";

export interface WeatherType {
  weather: [
    {
      id: Number;
      main: String;
      description: String;
      icon: String;
    }
  ];
  main: Main;
  dt: Number;
  name: string;
  sys: Sys;
  list: Array<CloudType>;
}

export interface Main {
  temp: Number;
  feels_like: Number;
  temp_min: Number;
  temp_max: Number;
  pressure: Number;
  humidity: Number;
}

export interface Sys {
  sunrise: number;
  sunset: number;
}

export interface WeatherStateType {
  weatherDesc: {
    weatherArray: WeatherType[];
    findCityAndDetails: Record<string, WeatherType>;
    bookMarks: Array<string>;
  };
}
