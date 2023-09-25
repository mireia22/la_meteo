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

type ForecastData = {
  day: string | null;
  time: string | null;
  weatherIcon: string | null;
  temperature: number | null;
};

type GroupedForecastData = {
  [date: string]: ForecastData[];
};
const ForecastResumeTemplate = ({ forecastData }) => {
  const groupedForecastData: GroupedForecastData = {};
  const { selectedLocation } = useWeatherDataContext();

  for (const forecastItem of forecastData) {
    const date = new Date(forecastItem.day ?? "");
    const formattedDate = format(date, "MMMM do");
    if (!groupedForecastData[formattedDate]) {
      groupedForecastData[formattedDate] = [];
    }
    groupedForecastData[formattedDate].push(forecastItem);
  }

  const toCelsius = (kelvin: number | null) =>
    ((kelvin ?? 0) - 273.15).toFixed(1) + "°";

  const forecastData12h = forecastData.filter(
    (forecastItem: ForecastData) =>
      new Date(forecastItem.time).getHours() === 12
  );
  const navigate = useNavigate();

  const goToForecastDate = () => {
    if (selectedLocation) {
      const name = selectedLocation.name;
      navigate(`/city-meteo/${name}/forecast`);
    } else {
      navigate("/homeforecast");
    }
  };

  return (
    <ForecastResumeWrp>
      <ForecastDaysWrp>
        {forecastData12h.map((forecastItem: ForecastData, index: number) => (
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
      <CustomBtn className="detailed-forecast" onClick={goToForecastDate}>
        Detailed Forecast
      </CustomBtn>
    </ForecastResumeWrp>
  );
};

export default ForecastResumeTemplate;
