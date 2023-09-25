import ForecastTemplate from "../../Templates/ForecastTemplate/ForecastTemplate";
import {
  useWeatherDataContext,
  WeatherContextType,
} from "../../Context/WeatherDataContext";

const CityForecast = () => {
  const { forecastData } = useWeatherDataContext() as WeatherContextType;

  return (
    <div>
      <ForecastTemplate forecastData={forecastData} />
    </div>
  );
};

export default CityForecast;
