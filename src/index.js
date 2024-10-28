import fetchWeather from "./js/fetchWeather.js";
import displayData from "./js/displayData.js";
import "./css/general.css";
// import "./css/displayData.css";

const body = document.getElementsByTagName("body")[0];
let returnedWeatherData = await fetchWeather('Delhi');
const contentBox = displayData(returnedWeatherData);
body.appendChild(contentBox);