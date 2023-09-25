import MeteoTemplate from "../../Templates/MeteoTemplate/MeteoTemplate";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";
import ForecastResumeTemplate from "../../Templates/ForecastResumeTemplate/ForecastResumeTemplate";
import Loader from "../../Components/Loader/Loader";
import { MeteoWrp } from "./HomeMeteo-styles";
const HomeMeteo = () => {
  const { weatherData, forecastData, loading } = useWeatherDataContext();

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