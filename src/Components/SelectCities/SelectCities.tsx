import { useNavigate } from "react-router-dom";
import { CITIES_ARRAY } from "../../Data/CitiesArray";
import { Select, Option } from "../SelectCities/SelectCities-styles";

type SelectedLocation = {
  lat: number;
  lon: number;
  index: string;
  name: string;
};

type CitiesSelectProps = {
  onLocationChange: (location: SelectedLocation) => void;
};

const SelectCities = ({ onLocationChange }: CitiesSelectProps) => {
  const navigate = useNavigate();

  const handleCitySelect = (city: SelectedLocation) => {
    onLocationChange(city);
    navigate(`/city-meteo/${city.name}`);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityIndex = event.target.value;
    const selectedCity = CITIES_ARRAY.find(
      (city) => city.index === selectedCityIndex
    );

    if (selectedCity) {
      handleCitySelect(selectedCity);
    }
  };

  return (
    <div>
      <Select onChange={handleSelectChange}>
        <option value="">Other Cities</option>
        {CITIES_ARRAY.map((city) => (
          <Option key={city.index} value={city.index}>
            {city.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectCities;
