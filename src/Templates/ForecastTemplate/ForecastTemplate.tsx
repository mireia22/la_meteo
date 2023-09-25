import { format } from "date-fns";
import {
  ForecastImgWrp,
  ForecastWrp,
  SingleHourForecast,
  SingleDayForecast,
  SingleDayWrp,
} from "../ForecastTemplate/ForecastTemplate-styles";
import { CustomBtn } from "../../Components/CustomButton/CustomButton-styles";
import { useNavigate, useParams } from "react-router-dom";

const ForecastTemplate = ({ forecastData }) => {
  const groupedForecastData = {};

  const groupForecastDataByDate = () => {
    for (const forecastItem of forecastData) {
      const date = new Date(forecastItem.day ?? "");
      const formattedDate = format(date, "EE do");
      if (!groupedForecastData[formattedDate]) {
        groupedForecastData[formattedDate] = [];
      }
      groupedForecastData[formattedDate].push(forecastItem);
    }
  };

  const toCelsius = (kelvin) => ((kelvin ?? 0) - 273.15).toFixed(1) + " °";
  const navigate = useNavigate();
  const { name } = useParams();

  const returnToHome = () => {
    if (name) {
      navigate(`/city-meteo/${name}`);
    } else {
      navigate("/");
    }
  };

  groupForecastDataByDate();

  return (
    <ForecastWrp>
      {Object.keys(groupedForecastData).map((formattedDate, index) => (
        <SingleDayWrp key={formattedDate}>
          <h4>{formattedDate}</h4>
          <SingleDayForecast
            style={{
              justifyContent: index === 0 ? "flex-end" : "start",
            }}
          >
            {groupedForecastData[formattedDate]
              .filter((forecastItem) => {
                const hour = parseInt(
                  format(new Date(forecastItem.time ?? ""), "H")
                );
                return hour !== 6 && hour !== 3 && hour !== 12;
              })
              .map((forecastItem, index, filteredData) => {
                const isHighestTemp =
                  forecastItem.temperature ===
                  Math.max(...filteredData.map((item) => item.temperature));
                const isLowestTemp =
                  forecastItem.temperature ===
                  Math.min(...filteredData.map((item) => item.temperature));

                return (
                  <SingleHourForecast
                    key={index}
                    style={{
                      backgroundColor: isHighestTemp
                        ? "rgba(189, 43, 58, 0.6)"
                        : isLowestTemp
                        ? "rgba(62, 181, 189, 0.6)"
                        : "transparent",
                      color: isHighestTemp || isLowestTemp ? "white" : "black",
                    }}
                  >
                    <p>{format(new Date(forecastItem.time ?? ""), "H'h'")}</p>
                    <ForecastImgWrp>
                      {forecastItem.weatherIcon && (
                        <img
                          src={forecastItem.weatherIcon}
                          alt="Weather Icon"
                        />
                      )}
                    </ForecastImgWrp>
                    <p>{toCelsius(forecastItem.temperature)}</p>
                  </SingleHourForecast>
                );
              })}
          </SingleDayForecast>
        </SingleDayWrp>
      ))}
      <CustomBtn className="return" onClick={returnToHome}>
        ⬅️ Return
      </CustomBtn>
    </ForecastWrp>
  );
};

export default ForecastTemplate;
