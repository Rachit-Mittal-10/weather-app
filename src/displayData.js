/*
data for failed attemp = code and message
*/
let displayFailedData = function(data){
    // Implement the function to display Failed Data
    // const failedBox = document.createElement("div");
    // failedBox.className = "failed-box";
    console.log(`${data.cod}\n${data.message}`);
}


/*
data has city key which is an object
city object has name attribute, coord(object), country attributes to display
list attribute has weather data
*/
let displaySucessfulData = function(data){
    // Implement the function to display Sucessful
    let city = data.city;
    console.log(`${city.name}\n${city.country}`);
}

export default function displayData(data){
    if(data.cod !== "200"){
        displayFailedData(data);
    }
    else{
        displaySucessfulData(data);
    }
};