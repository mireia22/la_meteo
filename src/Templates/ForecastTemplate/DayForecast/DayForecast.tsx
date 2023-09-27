import { SingleDayForecast } from "./DayForecast-styles";
import HourForecast from "../HourForecast/HourForecast";
import { DayForecastProps } from "../../../Types/WeatherTypes";

const DayForecast: React.FC<DayForecastProps> = ({ day }) => {
  const desiredHours = [9, 12, 15, 18, 21];

  const filteredDayData = day.filter((hour) => {
    const hourValue = new Date(hour.time ?? "").getHours();
    return desiredHours.includes(hourValue);
  });

  return (
    <SingleDayForecast>
      {filteredDayData.map((hour, index) => (
        <HourForecast
          key={index}
          hour={hour}
          filteredDayData={filteredDayData}
        />
      ))}
    </SingleDayForecast>
  );
};

export default DayForecast;
