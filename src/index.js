const API_KEY = "aaebd4178fcf227a3349fb75ef211df7";
const API_URL = "https://api.openweathermap.org/data/2.5/weather/?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".btn");

async function checkWeather (city) {
    const response = await fetch(API_URL + city+  `&appid=${API_KEY}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () =>  {
    if (!searchBox.value) return;
    checkWeather (searchBox.value);
})
