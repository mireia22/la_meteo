import MeteoTemplate from "../../Templates/MeteoTemplate/MeteoTemplate";
import ForecastResumeTemplate from "../../Templates/ForecastResumeTemplate/ForecastResumeTemplate";
import { MeteoWrp } from "./HomeMeteo-styles";

const HomeMeteo = () => {
  return (
    <MeteoWrp>
      <MeteoTemplate />
      <ForecastResumeTemplate />
    </MeteoWrp>
  );
};

export default HomeMeteo;
