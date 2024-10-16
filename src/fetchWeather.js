export default function Weather(){
    const API_KEY = "e3ff4bc0e67ef796cf6f736a27e81558";
    return async function fetchWeather(location){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`,{mode:'cors'});
        const weatherData = await response.json();
        return weatherData;
    }
};


