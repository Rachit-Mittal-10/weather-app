// import "../css/displayData.css";

/*
This function converts the kelvin to Celsius
*/
let convertKtoC = function(kelvin){    
    const celsius = Math.round(kelvin-273.15);
    return celsius;
}

/*
data for failed attemp = code and message
*/
let displayFailedData = function(data){
    // Implement the function to display Failed Data
    const failedBox = document.createElement("div");
    failedBox.className = "failed-box";
    const codeBox = document.createElement("p");
    codeBox.className = "code-box";
    codeBox.innerText = `${data.cod}`;
    const messageBox = document.createElement("p");
    messageBox.className = "message-box";
    messageBox.innerText = `${data.message}`;
    failedBox.appendChild(codeBox);
    failedBox.appendChild(messageBox);
    return failedBox;
}


/*
data has city key which is an object
city object has name attribute, coord(object), country attributes to display
list attribute has weather data. type: object
list[0] is the weather data of time, nearest to before of current time, which is multiple of 3.
list[1] is weather data of time, nearest to ahead of current time, which is multiple of 3.
For 22:00, list[0] would data of 21:00 and list[1] would be 00:00
Each object in list has weather, main, wind objects.
main object has temperature(in Kelvin), humidity, sea_level, pressure
weather object has object inside which description is there.
wind object has speed, degree, gust
*/
let displaySucessfulData = function(data){
    // Implement the function to display Sucessful
    let city = data.city;
    const successBox = document.createElement("div");
    successBox.className = "success-box";
    const cityBox = document.createElement("p");
    cityBox.className = "city-box";
    cityBox.innerText = `${city.name}`;
    const countryBox = document.createElement("p");
    countryBox.className = "country-box";
    countryBox.innerText = `${city.country}`;
    const temperatureBox = document.createElement("p");
    temperatureBox.className = "temp-Box";
    let celsiusTemp = convertKtoC(data.list[0].main.temp);
    temperatureBox.innerText = `${celsiusTemp}`;
    successBox.appendChild(cityBox);
    successBox.appendChild(countryBox);
    successBox.appendChild(temperatureBox);
    return successBox;
}

export default function displayData(data){
    if(data.cod !== "200"){
        return displayFailedData(data);
    }
    else{
        return displaySucessfulData(data);
    }
};