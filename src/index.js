import fetchWeather from "./js/fetchWeather.js";
import displayData from "./js/displayData.js";
import "./css/general.css";
import makePage from "./js/makePage.js";

const body = document.getElementsByTagName("body")[0];
// generate the page and add it to body
const PAGE = makePage();
body.appendChild(PAGE);
// adding the event listener
const locationSubmitButton = document.getElementById("location-submit-button");
locationSubmitButton.addEventListener("click", async (event)=>{
    event.preventDefault();
    const formEntries = Object.fromEntries(new FormData(document.getElementById("location-form")));
    let returnedWeatherData = await fetchWeather(formEntries.location);
    const contentBox = displayData(returnedWeatherData);
    const resultDiv = document.getElementById("result-div");
    resultDiv.innerHTML = "";
    resultDiv.appendChild(contentBox);
});
