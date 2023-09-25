import ForecastTemplate from "../../Templates/ForecastTemplate/ForecastTemplate";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";

const HomeForecast = () => {
  const { forecastData } = useWeatherDataContext();

  return (
    <div>
      <ForecastTemplate forecastData={forecastData} />
    </div>
  );
};

export default HomeForecast;
