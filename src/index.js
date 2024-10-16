import Weather from "./fetchWeather";

async function getWeather(location){
    try{
        const weatherData = await Weather()(location);
        console.log(weatherData.city);
    }
    catch(error){
        console.error("Error fetching the Weather data: ", error);
    }
}

getWeather('delhi');
