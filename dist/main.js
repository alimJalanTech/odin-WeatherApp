(() => {
  "use strict";
  const e = "aaebd4178fcf227a3349fb75ef211df7",
    t = "https://api.openweathermap.org/data/2.5/weather/?units=metric&q=",
    n = document.querySelector(".search input");
  document.querySelector(".btn").addEventListener("click", () => {
    n.value &&
      (async function (n) {
        const c = await fetch(`${t}${n}&appid=${e}`),
          i = await c.json();
        (document.querySelector(".city").innerHTML = i.name),
          (document.querySelector(".temp").innerHTML = `${Math.round(
            i.main.temp
          )}°C`),
          (document.querySelector(
            ".humidity"
          ).innerHTML = `${i.main.humidity}%`),
          (document.querySelector(".wind").innerHTML = `${i.wind.speed}km/h`);
      })(n.value);
  });
})();
