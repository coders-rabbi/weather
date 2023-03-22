"use strict";

const inputBox = document.getElementById('search');
const search = document.querySelector('.search');
const app_box = document.querySelector('.app_box');
const weatherImage = document.getElementById('weatherImage');
const locationName = document.getElementById('location');
const temp = document.getElementById('temp');
const weDes = document.getElementById('weDes');
const humadity = document.getElementById('humadity');
const speed = document.getElementById('speed');
const bottom = document.querySelector('.bottom');
const errorBox = document.querySelector('.error-box');


// default location function

window.onload = function defaultLocation() {
    const city = "Dhaka";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5be2ae7b7cb11800c101860f9cf7cfa&units=metric`)

        .then(response => response.json())
        .then(mainObj => {
            console.log(mainObj);
            if (mainObj.weather[0].main == "Clear") {
                weatherImage.src = "img/clear-sky.png";
            }
            if (mainObj.weather[0].main == "Clouds") {
                weatherImage.src = "img/cloud.png";
            }
            if (mainObj.weather[0].main == "Rain") {
                weatherImage.src = "img/rain.png";
            }
            if (mainObj.weather[0].main == "Haze") {
                weatherImage.src = "img/haze.png";
            }
            locationName.innerText = mainObj.name;
            temp.innerText = parseInt(mainObj.main.temp);
            weDes.innerText = mainObj.weather[0].description;
            humadity.innerText = mainObj.main.humidity + "%";
            speed.innerText = parseInt(mainObj.wind.speed) + "Km/h";

        })
};

search.addEventListener('click', function () { mainFunction(inputBox.value) });

inputBox.addEventListener('keyup', function (item) {
    if (item.key == "Enter") {
        search.click();
    }
});


// Main function 

function mainFunction(name) {
    const validCity = name.trim();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${validCity}&appid=d5be2ae7b7cb11800c101860f9cf7cfa&units=metric`)

        .then(response => response.json())
        .then(mainObj => {
            try {
                bottom.style.display = "block";
                errorBox.style.display = "none";

                if (screen.width > "400") {
                    app_box.style.height = "480px";
                } else {
                    app_box.style.height = "600px";
                }

                if (mainObj.weather[0].main == "Clear") {
                    weatherImage.src = "img/clear-sky.png";
                }
                if (mainObj.weather[0].main == "Clouds") {
                    weatherImage.src = "img/cloud.png";
                }
                if (mainObj.weather[0].main == "Rain") {
                    weatherImage.src = "img/rain.png";
                }
                if (mainObj.weather[0].main == "Haze") {
                    weatherImage.src = "img/haze.png";
                }
                locationName.innerText = mainObj.name;
                temp.innerText = parseInt(mainObj.main.temp);
                weDes.innerText = mainObj.weather[0].description;
                humadity.innerText = mainObj.main.humidity + "%";
                speed.innerText = parseInt(mainObj.wind.speed) + "Km/h";
            } catch {
                errorHandle();
            }

        })
}


function errorHandle() {
    app_box.style.height = "350px";
    bottom.style.display = "none";
    errorBox.style.display = "block";
}
