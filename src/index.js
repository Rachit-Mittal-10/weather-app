import getWeather from "./fetchWeather";

let returnedWeatherData = await getWeather('Delhi');
console.log(returnedWeatherData);