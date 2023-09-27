import { v4 as uuidv4 } from "uuid";

export const apiKey = import.meta.env.VITE_API_KEY;
export const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_ICONS = [
  {
    weatherDescription: "clear sky",
    icon: "/assets/weather-icons/clear-sky.jpg",
  },
  {
    weatherDescription: "few clouds",
    icon: "/assets/weather-icons/few-clouds.jpg",
  },
  {
    weatherDescription: "scattered clouds",
    icon: "/assets/weather-icons/scattered-clouds.jpg",
  },

  {
    weatherDescription: "broken clouds",
    icon: "/assets/weather-icons/scattered-clouds.jpg",
  },

  {
    weatherDescription: "overcast clouds",
    icon: "/assets/weather-icons/overcast-clouds.jpg",
  },

  {
    weatherDescription: "light rain",
    icon: "/assets/weather-icons/light-rain.jpg",
  },
  {
    weatherDescription: "rain",
    icon: "/assets/weather-icons/rain.jpg",
  },
  {
    weatherDescription: "snow",
    icon: "/assets/weather-icons/snow.jpg",
  },
  {
    weatherDescription: "light snow",
    icon: "/assets/weather-icons/light-snow.jpg",
  },
  {
    weatherDescription: "mist",
    icon: "/assets/weather-icons/mist.jpg",
  },
  {
    weatherDescription: "thunderstorm",
    icon: "/assets/weather-icons/thunderstorm.jpg",
  },
];

export const DEFAULT_ICON = "/public/assets/weather-icons/default.jpg";

export const CITIES_ARRAY = [
  {
    name: "Asheville",
    lat: 35.5951,
    lon: -82.5515,
    index: uuidv4(),
  },
  { name: "Banff", lat: 51.1784, lon: -115.5708, index: uuidv4() },

  { name: "Grenoble", lat: 45.1885, lon: 5.7245, index: uuidv4() },
  { name: "Zermatt", lat: 45.9784, lon: 7.6581, index: uuidv4() },

  { name: "Leh", lat: 34.1526, lon: 77.5771, index: uuidv4() },
  { name: "Gulmarg", lat: 34.0494, lon: 74.3829, index: uuidv4() },

  { name: "Cusco", lat: -13.5319, lon: -71.9675, index: uuidv4() },
  {
    name: "Bariloche",
    lat: -41.1335,
    lon: -71.3109,
    index: uuidv4(),
  },
];

export const THEME_DATA = [
  {
    name: "warm",
    imageSrc: "/assets/weather-icons/clear-sky.jpg",
    altText: "Sunny Theme",
    backgroundImage: 'url("/assets/images/warm-background.jpg")',
  },
  {
    name: "cold",
    imageSrc: "/assets/weather-icons/scattered-clouds.jpg",
    altText: "Cloudy Theme",
    backgroundImage: 'url("/assets/images/cold-background.jpg")',
  },
];

export const FOOTER_LINKS = [
  {
    name: "Github",
    href: "https://github.com/mireia22",
    icon: "/assets/icons/github.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mireia-garcia-ferrer-40381b255/",
    icon: "/assets/icons/linkedin.png",
  },
];
