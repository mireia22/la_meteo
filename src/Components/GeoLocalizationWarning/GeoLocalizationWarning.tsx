import { GeoWarningWrapper } from "./GeoLocalizationWarning-styles";
import { CustomBtn } from "../CustomButton/CustomButton-styles";

const GeoLocalizationWarning = () => {
  return (
    <GeoWarningWrapper>
      <p>🚨 🚩 🚨</p>
      <p>You need to activate your </p>
      <span>GEOLOCALIZATION </span>
      <p>to provide your location weather.</p>
      <CustomBtn className="detailed-forecast">Retry</CustomBtn>
    </GeoWarningWrapper>
  );
};

export default GeoLocalizationWarning;
