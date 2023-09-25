import { useWeatherDataContext } from "../../Context/WeatherDataContext";
import { useNavigate } from "react-router-dom";
import SelectCities from "../SelectCities/SelectCities";
import { HeaderWrp } from "./Header-styles";
import "boxicons";

const Header = () => {
  const { setSelectedLocation, fetchMeteoData } = useWeatherDataContext();
  const navigate = useNavigate();
  const gotoHome = () => {
    setSelectedLocation(null);
    fetchMeteoData();
    navigate("/");
  };

  return (
    <HeaderWrp>
      <div onClick={gotoHome}>
        <img src="/assets/icons/home-solid-24.png" alt="Home" />
      </div>
      <SelectCities onLocationChange={setSelectedLocation} />
    </HeaderWrp>
  );
};

export default Header;
