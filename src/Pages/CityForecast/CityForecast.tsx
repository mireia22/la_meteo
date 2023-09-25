import ForecastTemplate from "../../Templates/ForecastTemplate/ForecastTemplate";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";

const CityForecast = () => {
  const { forecastData } = useWeatherDataContext();

  return (
    <div>
      <ForecastTemplate forecastData={forecastData} />
    </div>
  );
};

export default CityForecast;
