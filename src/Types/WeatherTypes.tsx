export type WeatherProps = {
  children: React.ReactNode;
};

export type Location = {
  lat: number | null;
  lon: number | null;
};

export type WeatherData = {
  cityName: string | null;
  weatherDescription: string | null;
  windSpeed: number | null;
  weatherIcon: string | null;
  temperature: number | null;
  temp_max: number | null;
  temp_min: number | null;
};

export type ForecastData = {
  day: string | null;
  time: string | null;
  weatherIcon: string | null;
  temperature: number | null;
};

export type HourData = {
  time: string | null;
  weatherIcon: string | null;
  temperature: number | null;
};

export type GroupedForecastData = {
  [date: string]: ForecastData[];
};
// type GroupedForecastData = Record<string, ForecastData[]>;

export type DayForecastProps = {
  day: ForecastData[];
};

export type HourForecastProps = {
  hour: ForecastData;
  filteredDayData: ForecastData[];
};

export type ForecastItem = {
  dt_txt: string | null;
  main: {
    temp: number | null;
  } | null;
  weather:
    | {
        description: string | null;
      }[]
    | null;
};

export type SelectedLocation = {
  lat: number;
  lon: number;
  index: string;
  name: string;
};

export type WeatherContextType = {
  selectedLocation: SelectedLocation | null;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<SelectedLocation | null>
  >;
  weatherData: WeatherData;
  forecastData: ForecastData[];
  groupedForecastData: GroupedForecastData;
};
