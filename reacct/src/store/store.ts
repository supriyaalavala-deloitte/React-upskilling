import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter";
import typingSlice from "./Search/Typing";
import weatherDescriptionSlice from "./WeatherDescription/WeatherDescription";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    search: typingSlice.reducer,
    weatherDesc: weatherDescriptionSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const typingActions = typingSlice.actions;
export const weatherDescAction = weatherDescriptionSlice.actions;

export default store;
