import "../css/makePage.css"
/*
This function makes the page
*/
export default function makePage(){
    const appDiv = document.createElement("div"); 
    appDiv.id = "app-div";
    
    const titleDiv = document.createElement("div");
    titleDiv.id = "title-div";
    titleDiv.innerHTML = `<p>Get The Weather App</p>`;
    
    const locationDiv = document.createElement("div");
    locationDiv.id="location-div";
    const locationForm = document.createElement("form");
    locationForm.id = "location-form";
    // locationForm.setAttribute("method","POST");
    locationForm.setAttribute("action","#");
    const locationLabel = document.createElement("label");
    locationLabel.setAttribute("for","location");
    locationLabel.innerText = "Location";
    const locationInput = document.createElement("input");
    locationInput.setAttribute("type","text");
    locationInput.setAttribute("name","location");
    locationInput.setAttribute("id","location");
    const locationSubmitButton = document.createElement("button");
    locationSubmitButton.innerText = "SUBMIT";
    locationSubmitButton.id = "location-submit-button";
    locationSubmitButton.addEventListener("submit",(event)=>{
        event.preventDefault();
    });
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