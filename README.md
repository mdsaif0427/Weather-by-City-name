# Skycast

Weather. Nothing else.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

Vanilla HTML, CSS, JS. No frameworks. No build step. Just open and use.

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

---

MIT
