import {
  SingleLocationWrp,
  WeatherIcon,
  MinMaxTempWrp,
} from "./MeteoTemplate-styles";

const MeteoTemplate = ({ weatherData }) => {
  const toCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(1) + "°";

  return (
    <SingleLocationWrp>
      <h2>{weatherData.cityName}</h2>
      <h3>Today</h3>

      <h1>
        {weatherData.temperature !== null
          ? toCelsius(weatherData.temperature)
          : "N/A"}
      </h1>
      <MinMaxTempWrp>
        <p>
          ⬇️
          {weatherData.temp_min !== null
            ? toCelsius(weatherData.temp_min)
            : "N/A"}
        </p>

        <p>
          ⬆️
          {weatherData.temp_max !== null
            ? toCelsius(weatherData.temp_max)
            : "N/A"}
        </p>
      </MinMaxTempWrp>

      <WeatherIcon>
        <img src={weatherData.weatherIcon || ""} alt="Weather Icon" />
      </WeatherIcon>

      <p>🍃 {weatherData.windSpeed} m/s</p>
    </SingleLocationWrp>
  );
};

export default MeteoTemplate;
