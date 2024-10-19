import fetchWeather from "./fetchWeather";
import displayData from "./displayData.js";

let returnedWeatherData = await fetchWeather('Bengaluru');
console.log(returnedWeatherData);
displayData(returnedWeatherData);