import { useNavigate } from "react-router-dom";
import { CITIES_ARRAY } from "../../Constants/Constants";
import { Select, Option } from "../SelectCities/SelectCities-styles";
import { SelectedLocation } from "../../Types/WeatherTypes";

type CitiesSelectProps = {
  onLocationChange: (location: SelectedLocation) => void;
};

const SelectCities: React.FC<CitiesSelectProps> = ({ onLocationChange }) => {
  const navigate = useNavigate();

  // Handle selecting a city
  const handleCitySelect = (city: SelectedLocation) => {
    onLocationChange(city);
    navigate(`/${city.name}`);
  };

  // Handle changes in the city select dropdown
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityIndex = event.target.value; // Get the selected city's index
    if (selectedCityIndex) {
      // Check if a city index is selected adn find the city with its index
      const selectedCity = CITIES_ARRAY.find(
        (city) => city.index === selectedCityIndex
      );
      if (selectedCity) {
        handleCitySelect(selectedCity);
      }
    }
  };

  // Sort the cities alphabetically by their names
  const sortedCities = [...CITIES_ARRAY].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Select onChange={handleSelectChange}>
      <option value="">Other Cities</option>
      {sortedCities.map((city) => (
        <Option key={city.index} value={city.index}>
          {city.name}
        </Option>
      ))}
    </Select>
  );
};

export default SelectCities;
