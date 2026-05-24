const apiKey = "a1f6790413a6298740d1970cb86a87d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const btn = document.querySelector(".search button");
const ipt = document.querySelector(".search input");
const weatherIcon = document.getElementById("weatherIcon");
const card = document.getElementById("weatherCard");
const errorMsg = document.getElementById("error");

const iconMap = {
    Clouds: "images/clouds.png",
    Clear: "images/clear.png",
    Drizzle: "images/drizzle.png",
    Rain: "images/rain.png",
    Snow: "images/snow.png",
    Mist: "images/mist.png",
    Haze: "images/mist.png",
    Fog: "images/mist.png",
};

function getDate() {
    return new Date().toLocaleDateString("en-GB", {
        weekday: "long", day: "numeric", month: "long"
    });
}

function showError(show) {
    if (show) {
        errorMsg.classList.add("visible");
    } else {
        errorMsg.classList.remove("visible");
        setTimeout(() => { errorMsg.style.display = ""; }, 300);
    }
}

async function checkWeather(city) {
    if (!city.trim()) return;

    try {
        const response = await fetch(apiUrl + encodeURIComponent(city) + `&appid=${apiKey}`);

        if (response.status === 404) {
            showError(true);
            card.classList.remove("show");
            setTimeout(() => { card.style.display = ""; }, 400);
            return;
        }

        showError(false);
        const data = await response.json();

        document.getElementById("city").textContent = data.name + ", " + data.sys.country;
        document.getElementById("date").textContent = getDate();
        document.getElementById("temp").textContent = Math.round(data.main.temp);
        document.getElementById("feels").textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;
        document.getElementById("condition").textContent = data.weather[0].description;
        document.getElementById("wind").textContent = data.wind.speed + " km/h";
        document.getElementById("humidity").textContent = data.main.humidity + "%";
        document.getElementById("visibility").textContent = (data.visibility / 1000).toFixed(1) + " km";

        const condition = data.weather[0].main;
        weatherIcon.src = iconMap[condition] || "images/clouds.png";

        card.style.display = "block";
        requestAnimationFrame(() => {
            requestAnimationFrame(() => card.classList.add("show"));
        });

    } catch (err) {
        showError(true);
    }
}

btn.addEventListener("click", () => checkWeather(ipt.value));
ipt.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkWeather(ipt.value);
});
