import ForecastTemplate from "../../Templates/ForecastTemplate/ForecastTemplate";
import {
  WeatherContextType,
  useWeatherDataContext,
} from "../../Context/WeatherDataContext";

const HomeForecast = () => {
  const { forecastData } = useWeatherDataContext() as WeatherContextType;

  return (
    <div>
      <ForecastTemplate forecastData={forecastData} />
    </div>
  );
};

export default HomeForecast;
