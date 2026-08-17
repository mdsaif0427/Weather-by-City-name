# Skycast

Weather-by-City name

**What it does** — search any city, get temp, wind, humidity, visibility. That's it.

The API key is kept server-side via a Vercel serverless function, so it's never exposed in the browser or in this repo.

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