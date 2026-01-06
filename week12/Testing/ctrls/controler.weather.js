export function isSafeToHikeC(req, res) {
  const { temperature, windSpeed } = req.body;

  if (!temperature || !windSpeed) {
    res.status(400).json("missing temperature or windSpeed");
  }
  if (typeof temperature !== "number" || typeof windSpeed !== "number") {
    res.status(400).json("temperature or windSpeed is invalid ");
  }

  if (temperature < 0 || temperature > 35) {
    res.json({
      safe: false,
      message: "Too temperature to hike!",
    });
  } else if (windSpeed > 50) {
    res.json({
      safe: false,
      message: "Too windy to hike!",
    });
  } else {
    res.json({
      safe: true,
      message: "All conditions are good for hiking!",
    });
  }
}
