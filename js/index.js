const dataLoad = () => {
    const city = "dhaka";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5be2ae7b7cb11800c101860f9cf7cfa&units=metric`)
    .then(response => response.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    const temperature= document.getElementById('temperature');
    temperature.innerText = data.main.temp;
}

dataLoad();