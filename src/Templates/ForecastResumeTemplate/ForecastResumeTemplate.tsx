import { format } from "date-fns";
import {
  ImgWrp,
  ForecastResumeWrp,
  ForecastDaysWrp,
  ForecastSingleDayWrp,
} from "../ForecastResumeTemplate/ForecastResumeTemplate-styles";
import { useNavigate } from "react-router-dom";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";
import { CustomBtn } from "../../Components/CustomButton/CustomButton-styles";
import { WeatherContextType } from "../../Types/WeatherTypes";
import useTemperatureConversion from "../../Hooks/useTemperatureConversion";

const ForecastResumeTemplate = () => {
  const { forecastData } = useWeatherDataContext() as WeatherContextType;
  const toCelsius = useTemperatureConversion();

  const forecastData12h = forecastData.filter(
    (forecastItem) => new Date(forecastItem.time ?? "").getHours() === 12
  );

  return (
    <ForecastResumeWrp>
      <ForecastDaysWrp>
        {forecastData12h.map((forecastItem, index: number) => (
          <ul key={index}>
            <ForecastSingleDayWrp>
              <p>{format(new Date(forecastItem.day ?? ""), "eee")}</p>
              <ImgWrp>
                {forecastItem.weatherIcon && (
                  <img src={forecastItem.weatherIcon} alt="Weather Icon" />
                )}
              </ImgWrp>
              <p>{toCelsius(forecastItem.temperature)}</p>
            </ForecastSingleDayWrp>
          </ul>
        ))}
      </ForecastDaysWrp>
    </ForecastResumeWrp>
  );
};

export default ForecastResumeTemplate;
