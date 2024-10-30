import "../css/makePage.css"

export default function makePage(){
    const appDiv = document.createElement("div"); 
    appDiv.id = "app-div";
    
    const titleDiv = document.createElement("div");
    titleDiv.id = "title-div";
    titleDiv.innerHTML = `<p>Get The Weather App</p>`;
    
    const locationDiv = document.createElement("div");
    locationDiv.id="location-div";
    const locationForm = document.createElement("form");
    const locationLabel = document.createElement("label");
    locationLabel.setAttribute("for","location");
    const locationInput = document.createElement("input");
    locationInput.setAttribute("type","text");
    locationInput.setAttribute("name","location");
    locationInput.setAttribute("id","location");
    const locationSubmitButton = document.createElement("button");
    locationSubmitButton.innerText = "SUBMIT";
    locationForm.appendChild(locationLabel);
    locationForm.appendChild(locationInput);
    locationForm.appendChild(locationSubmitButton);
    locationDiv.appendChild(locationForm);

    const resultDiv = document.createElement("div");
    resultDiv.id = "result-div";
    appDiv.appendChild(titleDiv);
    appDiv.appendChild(locationDiv);
    appDiv.appendChild(resultDiv);
    return appDiv;
};