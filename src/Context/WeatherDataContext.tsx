import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { format } from "date-fns";

import {
  CITIES_ARRAY,
  DEFAULT_ICON,
  WEATHER_ICONS,
} from "../Constants/Constants";
import GeoLocalizationWarning from "../Components/GeoLocalizationWarning/GeoLocalizationWarning";
import Loader from "../Components/Loader/Loader";
import {
  WeatherProps,
  Location,
  WeatherData,
  ForecastData,
  ForecastItem,
  SelectedLocation,
  WeatherContextType,
  GroupedForecastData,
} from "../Types/WeatherTypes";

//CONSTANTS
const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = "https://api.openweathermap.org/data";

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
    const matchingIcon = WEATHER_ICONS.find(
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
        apiUrl = `${API_BASE_URL}/2.5/weather?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${API_KEY}`;
      } else {
        apiUrl = `${API_BASE_URL}/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
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
        apiUrl = `${API_BASE_URL}/2.5/forecast/?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${API_KEY}`;
      } else {
        apiUrl = `${API_BASE_URL}/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      }
      if (apiUrl) {
        fetchData(apiUrl, "forecast");
      }
    }
  }, [location, selectedLocation]);

  //GROUPED FORECAST DATA
  const groupedForecastData: GroupedForecastData = {};

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
  groupForecastDataByDate();

  //SHARED STATE
  const sharedState = {
    selectedLocation,
    setSelectedLocation,
    weatherData,
    forecastData,
    groupedForecastData,
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
