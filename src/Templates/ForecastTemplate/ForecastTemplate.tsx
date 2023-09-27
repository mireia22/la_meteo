import {
  ForecastWrp,
  SingleDayWrp,
} from "../ForecastTemplate/ForecastTemplate-styles";
import { CustomBtn } from "../../Components/CustomButton/CustomButton-styles";
import { useNavigate, useParams } from "react-router-dom";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";
import { WeatherContextType } from "../../Types/WeatherTypes";
import DayForecast from "./DayForecast/DayForecast";

const ForecastTemplate = () => {
  const { groupedForecastData, weatherData } =
    useWeatherDataContext() as WeatherContextType;
  const navigate = useNavigate();
  const { name } = useParams();

  const returnToHome = () => {
    if (name) {
      navigate(`/city-meteo/${name}`);
    } else {
      navigate("/");
    }
  };

  return (
    <ForecastWrp>
      <h1>{weatherData.cityName?.toUpperCase()}</h1>
      {Object.keys(groupedForecastData).map((formattedDate) => (
        <SingleDayWrp key={formattedDate}>
          <h4>{formattedDate}</h4>
          <DayForecast day={groupedForecastData[formattedDate]} />
        </SingleDayWrp>
      ))}
      <CustomBtn className="return" onClick={returnToHome}>
        ⬅️ Return
      </CustomBtn>
    </ForecastWrp>
  );
};

export default ForecastTemplate;
