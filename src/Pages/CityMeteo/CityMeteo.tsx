import MeteoTemplate from "../../Templates/MeteoTemplate/MeteoTemplate";
import ForecastResumeTemplate from "../../Templates/ForecastResumeTemplate/ForecastResumeTemplate";
import { CityMeteoWrp } from "./CityMeteo-styles";

const CityMeteo = () => {
  return (
    <CityMeteoWrp>
      <MeteoTemplate />
      <ForecastResumeTemplate />
    </CityMeteoWrp>
  );
};

export default CityMeteo;
