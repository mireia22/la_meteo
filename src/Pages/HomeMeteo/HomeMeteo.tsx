import MeteoTemplate from "../../Templates/MeteoTemplate/MeteoTemplate";
import ForecastResumeTemplate from "../../Templates/ForecastResumeTemplate/ForecastResumeTemplate";
import { MeteoWrp, Title, CustomBtnWrp } from "./HomeMeteo-styles";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";
import { WeatherContextType } from "../../Types/WeatherTypes";
import { CustomBtn } from "../../Components/CustomButton/CustomButton-styles";
import { useNavigate } from "react-router-dom";

const HomeMeteo = () => {
  const { weatherData, selectedLocation } =
    useWeatherDataContext() as WeatherContextType;
  const navigate = useNavigate();

  const goToForecastDate = () => {
    if (selectedLocation) {
      const name = selectedLocation.name;
      navigate(`/${name}/forecast`);
    } else {
      navigate("/forecast");
    }
  };

  return (
    <MeteoWrp>
      <Title>
        <h1>{weatherData.cityName?.toUpperCase()}</h1>
        <h3>Today</h3>
      </Title>
      <MeteoTemplate />
      <ForecastResumeTemplate />
      <CustomBtnWrp>
        <CustomBtn className="detailed-forecast" onClick={goToForecastDate}>
          Detailed Forecast
        </CustomBtn>
      </CustomBtnWrp>
    </MeteoWrp>
  );
};

export default HomeMeteo;
