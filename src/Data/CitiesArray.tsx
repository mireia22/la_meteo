import { v4 as uuidv4 } from "uuid";

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
