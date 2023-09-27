import { useEffect, useState } from "react";
import { ForecastData } from "../Types/WeatherTypes";

const useMinMaxTemperature = (data: ForecastData[]) => {
  const [maxTemp, setMaxTemp] = useState<number | null>(null);
  const [minTemp, setMinTemp] = useState<number | null>(null);

  useEffect(() => {
    const dayTemperatures = data
      .map((item) => item.temperature)
      .filter((temp) => temp !== null) as number[];

    const max = Math.max(...dayTemperatures);
    const min = Math.min(...dayTemperatures);

    setMaxTemp(max);
    setMinTemp(min);
  }, [data]);

  return { maxTemp, minTemp };
};

export default useMinMaxTemperature;
