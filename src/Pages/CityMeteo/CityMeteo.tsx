import MeteoTemplate from "../../Templates/MeteoTemplate/MeteoTemplate";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";
import ForecastResumeTemplate from "../../Templates/ForecastResumeTemplate/ForecastResumeTemplate";
import { SelectAndBtnWrp } from "./CityMeteo-styles";
import { WeatherContextType } from "../../Context/WeatherDataContext";
const CityMeteo = () => {
  const { weatherData, forecastData } =
    useWeatherDataContext() as WeatherContextType;

  return (
    <div>
      <SelectAndBtnWrp></SelectAndBtnWrp>

      <MeteoTemplate weatherData={weatherData} />
      <div>
        <ForecastResumeTemplate forecastData={forecastData} />{" "}
      </div>
    </div>
  );
};

export default CityMeteo;
