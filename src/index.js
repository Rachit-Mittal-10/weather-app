import fetchWeather from "./js/fetchWeather.js";
import displayData from "./js/displayData.js";
import "./css/general.css";
import makePage from "./js/makePage.js";

const body = document.getElementsByTagName("body")[0];

const PAGE = makePage();
let returnedWeatherData = await fetchWeather('Delhi');
const contentBox = displayData(returnedWeatherData);
body.appendChild(PAGE);
const resultDiv = document.getElementById("result-div");
resultDiv.appendChild(contentBox);