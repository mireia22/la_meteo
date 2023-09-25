import React from "react";
import { CustomBtn } from "../CustomButton/CustomButton-styles";

type ThemeSwitchProps = {
  toggleTheme: () => void;
  currentTheme: "warm" | "cold";
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  toggleTheme,
  currentTheme,
}) => {
  const themeImages: Record<string, string> = {
    warm: "/assets/weather-icons/clear-sky.jpg",
    cold: "/assets/weather-icons/scattered-clouds.jpg",
  };

  return (
    <CustomBtn className="theme" onClick={toggleTheme}>
      <img
        src={themeImages[currentTheme]}
        alt={currentTheme === "warm" ? "Sunny Theme" : "Cloudy Theme"}
        width="24"
        height="24"
      />
    </CustomBtn>
  );
};

export default ThemeSwitch;
