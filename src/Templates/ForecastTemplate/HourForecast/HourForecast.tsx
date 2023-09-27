import useMinMaxTemperature from "../../../Hooks/useMinMaxTemperature";
import useTemperatureConversion from "../../../Hooks/useTemperatureConversion";
import { HourForecastProps } from "../../../Types/WeatherTypes";
import { ForecastImgWrp, SingleHourForecast } from "./HourForecast-styles";
import format from "date-fns/format";

const HourForecast: React.FC<HourForecastProps> = ({
  hour,
  filteredDayData,
}) => {
  const toCelsius = useTemperatureConversion();
  const { maxTemp, minTemp } = useMinMaxTemperature(filteredDayData);
  const isMaxTemp = hour.temperature === maxTemp;
  const isMinTemp = hour.temperature === minTemp;

  const hourString = format(new Date(hour.time ?? ""), "H'h'");
  return (
    <SingleHourForecast
      style={{
        backgroundColor: isMaxTemp
          ? "rgba(189, 43, 58, 0.6)"
          : isMinTemp
          ? "rgba(62, 181, 189, 0.6)"
          : "transparent",
        color: isMaxTemp || isMinTemp ? "white" : "black",
      }}
    >
      <p>{hourString}</p>
      <ForecastImgWrp>
        <img src={hour.weatherIcon ?? ""} alt="Weather Icon" />
      </ForecastImgWrp>
      <p>{toCelsius(hour.temperature)}</p>
    </SingleHourForecast>
  );
};
export default HourForecast;
