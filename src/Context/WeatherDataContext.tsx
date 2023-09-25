import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { CITIES_ARRAY } from "../Data/CitiesArray";
import { WeatherIcons, DEFAULT_ICON } from "../Data/WeatherIcons";
import GeoLocalizationWarning from "../Components/GeoLocalizationWarning/GeoLocalizationWarning";
import Loader from "../Components/Loader/Loader";

//TYPES
type WeatherProps = {
  children: React.ReactNode;
};

type Location = {
  lat: number | null;
  lon: number | null;
};

type WeatherData = {
  cityName: string | null;
  weatherDescription: string | null;
  windSpeed: number | null;
  weatherIcon: string | null;
  temperature: number | null;
  temp_max: number | null;
  temp_min: number | null;
};

type ForecastData = {
  day: string | null;
  time: string | null;
  weatherIcon: string | null;
  temperature: number | null;
};

type ForecastItem = {
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

type SelectedLocation = {
  lat: number;
  lon: number;
  index: string;
  name: string;
};

export type WeatherContextType = {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  selectedLocation: SelectedLocation | null;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<SelectedLocation | null>
  >;
  weatherData: WeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
  forecastData: ForecastData[]; // You have defined forecastData here
  setForecastData: React.Dispatch<React.SetStateAction<ForecastData[]>>;
  fetchData: (url: string, dataType: "meteo" | "forecast") => Promise<void>;
  apiKey: string;
  loading: boolean;
};

//CONSTANTS
const apiKey = import.meta.env.VITE_API_KEY;
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

//CONTEXT
export const WeatherDataContext = createContext<WeatherContextType | null>(
  null
);
export const useWeatherDataContext = () => useContext(WeatherDataContext);

//PROVIDER
export const WeatherDataProvider = ({ children }: WeatherProps) => {
  const [location, setLocation] = useState<Location>({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState<WeatherData>({
    cityName: "",
    weatherDescription: "",
    windSpeed: null,
    weatherIcon: "",
    temperature: null,
    temp_max: null,
    temp_min: null,
  });
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(true);

  //GET SPECIFIC ICONS
  const getWeatherIcon = (description: string) => {
    const matchingIcon = WeatherIcons.find(
      (icon) => icon.weatherDescription === description
    );
    return matchingIcon ? matchingIcon.icon : DEFAULT_ICON;
  };

  //FETCH DATA
  const fetchData = useCallback(
    async (url: string, dataType: "meteo" | "forecast") => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const data = await res.json();

        const { name, main, weather, wind } = data;

        const newData = {
          cityName: name,
          temperature: main?.temp,
          temp_max: main?.temp_max,
          temp_min: main?.temp_min,
          weatherDescription: weather?.[0]?.description,
          windSpeed: wind?.speed,
          weatherIcon: getWeatherIcon(weather?.[0]?.description),
        };

        //METEO DATA
        if (dataType === "meteo") {
          setWeatherData((prevWeatherData) => ({
            ...prevWeatherData,
            ...newData,
          }));
          //FORECAST DATA
        } else if (dataType === "forecast") {
          const forecastItems = data.list?.map(
            (forecastItem: ForecastItem) => ({
              time: forecastItem.dt_txt,
              day: forecastItem.dt_txt,
              temperature: forecastItem.main?.temp,
              weatherIcon: getWeatherIcon(
                forecastItem.weather?.[0]?.description ?? ""
              ),
            })
          );
          setForecastData(forecastItems || []);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    },
    []
  );

  //LAT AND LON: SELECTED LOCATION ||  GEOLOCALIZATION
  useEffect(() => {
    if (selectedLocation) {
      const cityId = selectedLocation.index;
      const selectedCity = CITIES_ARRAY.find((city) => city.index === cityId);
      if (selectedCity) {
        setLocation({ lat: selectedCity.lat, lon: selectedCity.lon });
      }
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        () => {
          console.error("Please activate your geolocation 🚩");
          setLoading(false);
        }
      );
    }
  }, [selectedLocation]);

  //FETCH METEO
  useEffect(() => {
    const { lat, lon } = location;
    if (lat !== null && lon !== null) {
      let apiUrl;
      if (selectedLocation) {
        apiUrl = `${API_BASE_URL}/weather?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${apiKey}`;
      } else {
        apiUrl = `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      }
      if (apiUrl) {
        fetchData(apiUrl, "meteo");
      }
    }
  }, [location, selectedLocation]);

  //FETCH FORECAST
  useEffect(() => {
    const { lat, lon } = location;
    if (lat !== null && lon !== null) {
      let apiUrl;
      if (selectedLocation) {
        apiUrl = `${API_BASE_URL}/forecast/?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${apiKey}`;
      } else {
        apiUrl = `${API_BASE_URL}/forecast/?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      }
      if (apiUrl) {
        fetchData(apiUrl, "forecast");
      }
    }
  }, [location, selectedLocation]);

  //SHARED STATE
  const sharedState = {
    location,
    setLocation,
    selectedLocation,
    setSelectedLocation,
    weatherData,
    setWeatherData,
    forecastData,
    setForecastData,
    fetchData,
    apiKey,
    loading,
  };

  return (
    <WeatherDataContext.Provider value={sharedState}>
      {loading ? (
        <Loader />
      ) : location.lat === null || location.lon === null ? (
        <GeoLocalizationWarning />
      ) : (
        children
      )}
    </WeatherDataContext.Provider>
  );
};
