import MeteoTemplate from "../../Templates/MeteoTemplate/MeteoTemplate";
import {
  WeatherContextType,
  useWeatherDataContext,
} from "../../Context/WeatherDataContext";
import ForecastResumeTemplate from "../../Templates/ForecastResumeTemplate/ForecastResumeTemplate";
import Loader from "../../Components/Loader/Loader";
import { MeteoWrp } from "./HomeMeteo-styles";

const HomeMeteo = () => {
  const { weatherData, forecastData, loading } =
    useWeatherDataContext() as WeatherContextType;

  return (
    <MeteoWrp>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MeteoTemplate weatherData={weatherData} />
          <ForecastResumeTemplate forecastData={forecastData} />
        </>
      )}
    </MeteoWrp>
  );
};

export default HomeMeteo;
