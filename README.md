# Skycast

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-EB6E4B?style=flat)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

Weather-by-City name

**What it does** — search any city, get temp, wind, humidity, visibility. That's it.

The API key is kept server-side via a Vercel serverless function, so it's never exposed in the browser or in this repo.

---

## Screenshot

![Skycast app screenshot](./images/screenshot.png)

> 📸 Add your own screenshot: run the app, take a screenshot of the search results, save it as `images/screenshot.png`, then commit it. Until then this line will show as a broken image link on GitHub.

---

## Features

| | |
|---|---|
| 🔍 Search any city | Get live weather in one click |
| 🌡️ Temperature & feels-like | Metric units (°C) |
| 💨 Wind speed | km/h |
| 💧 Humidity | % |
| 👁️ Visibility | km |
| 🎨 Dynamic weather icons | Changes based on condition (clear, rain, snow, clouds, mist, drizzle) |
| 🔒 Hidden API key | Key never reaches the browser — proxied through a serverless function |

**Weather condition icons used in the app:**

<p>
  <img src="./images/clear.png" width="50" alt="Clear" />
  <img src="./images/clouds.png" width="50" alt="Clouds" />
  <img src="./images/rain.png" width="50" alt="Rain" />
  <img src="./images/drizzle.png" width="50" alt="Drizzle" />
  <img src="./images/snow.png" width="50" alt="Snow" />
  <img src="./images/mist.png" width="50" alt="Mist" />
</p>

---

## Local development

```bash
git clone https://github.com/yourname/skycast.git
cd skycast
npm install -g vercel
vercel dev
```

`vercel dev` runs both the static site and the `/api/weather` serverless function locally. You'll be prompted to link the project and pull environment variables (see below) on first run.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com) as a new project (framework preset: **Other** / static — no build command).
3. In **Settings → Environment Variables**, add:
   - **Key**: `OPENWEATHER_API_KEY`
   - **Value**: your key from [openweathermap.org](https://openweathermap.org/api)
4. Redeploy the project (Deployments tab → ⋯ → Redeploy) so the new variable takes effect.

The frontend calls `/api/weather?city=...`, which is handled by `api/weather.js`. That function reads `OPENWEATHER_API_KEY` from the environment and forwards the request to OpenWeatherMap — the key itself is never sent to the client.

---

## Structure

```
skycast/
├── index.html
├── style.css
├── script.js
├── api/
│   └── weather.js      # serverless function, proxies OpenWeatherMap using OPENWEATHER_API_KEY
├── vercel.json
├── images/
│   ├── screenshot.png  # add your own app screenshot here
│   └── ...              # weather condition icons
```

---

## Stack

- OpenWeatherMap API (free tier), accessed via a Vercel serverless function
- Pure JS — no libraries
- CSS backdrop-filter for glass UI

