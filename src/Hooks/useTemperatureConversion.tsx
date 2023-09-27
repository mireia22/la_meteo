const useTemperatureConversion = () => {
  const toCelsius = (kelvin: number | null) =>
    ((kelvin ?? 0) - 273.15).toFixed(1) + " °";
  return toCelsius;
};

export default useTemperatureConversion;
