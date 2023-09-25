import { GeoWarningWrapper } from "./GeoLocalizationWarning-styles";
import { CustomBtn } from "../CustomButton/CustomButton-styles";
import { useWeatherDataContext } from "../../Context/WeatherDataContext";

const GeoLocalizationWarning = () => {
  const {
    fetchMeteoData,
    setLocation,
    fetchData,
    setWeatherData,
    setSelectedLocation,
  } = useWeatherDataContext();

  const reloadPage = () => {
    window.location.reload();
    setLocation();
    fetchMeteoData();
    fetchData();
    setWeatherData();
    setSelectedLocation(null);
  };
  return (
    <GeoWarningWrapper>
      <p>🚨 🚩 🚨</p>
      <p>You need to activate your </p>
      <span>GEOLOCALIZATION </span>
      <p>to provide your location weather.</p>
      <CustomBtn onClick={reloadPage} className="detailed-forecast">
        Retry
      </CustomBtn>
    </GeoWarningWrapper>
  );
};

export default GeoLocalizationWarning;
