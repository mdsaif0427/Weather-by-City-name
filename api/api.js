export default async function handler(req, res) {
  const { city } = req.query;

  if (!city || !city.trim()) {
    return res.status(400).json({ error: "City is required" });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Server misconfiguration: missing API key" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(
    city
  )}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}