# Skycast

Weather-by-City name

**What it does** — search any city, get temp, wind, humidity, visibility. That's it.

---

## Setup

```bash
git clone https://github.com/yourname/skycast.git
cd skycast
cp config.example.js config.js
```

Add your key to `config.js`:
```js
const API_KEY = "your_key_here";
```

Get a free key at [openweathermap.org](https://openweathermap.org/api). Then open `index.html`.

---

## Structure

```
skycast/
├── index.html
├── style.css
├── script.js
├── config.js          # ignored by git
├── config.example.js
└── images/
```

---

## Stack

- OpenWeatherMap API (free tier)
- Pure JS — no libraries
- CSS backdrop-filter for glass UI

