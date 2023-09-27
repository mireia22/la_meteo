import { useWeatherDataContext } from "../../Context/WeatherDataContext";
import useTemperatureConversion from "../../Hooks/useTemperatureConversion";
import { WeatherContextType } from "../../Types/WeatherTypes";
import {
  SingleLocationWrp,
  WeatherIcon,
  MinMaxTempWrp,
} from "./MeteoTemplate-styles";

const MeteoTemplate = () => {
  const { weatherData } = useWeatherDataContext() as WeatherContextType;
  const toCelsius = useTemperatureConversion();

  return (
    <SingleLocationWrp>
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
