import { Route, Routes } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { AppWrp, MainWrp } from "./App-styles";
import { WeatherDataProvider } from "./Context/WeatherDataContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ThemeSwitch from "./Components/ThemeSwitch/Theme-switch";
import { THEME_DATA } from "./Constants/Constants";
import HomeMeteo from "./Pages/HomeMeteo/HomeMeteo";
import HomeForecast from "./Pages/HomeForecast/HomeForecast";
import CityMeteo from "./Pages/CityMeteo/CityMeteo";
import CityForecast from "./Pages/CityForecast/CityForecast";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [theme, setTheme] = useState<"warm" | "cold">("warm");

  useEffect(() => {
    // Load theme preference from local storage if available
    const localTheme = window.localStorage.getItem("theme");
    // Set theme/default theme and store it in local storage
    if (localTheme) {
      setTheme(localTheme as "warm" | "cold");
    } else {
      setTheme("warm");
      window.localStorage.setItem("theme", "warm");
    }
  }, []);

  // Toggle theme between "warm" and "cold", also in localstorage
  const toggleTheme = () => {
    const newTheme = theme === "warm" ? "cold" : "warm";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  // Find theme data based on the current theme
  const selectedThemeData = THEME_DATA.find((item) => item.name === theme);

  return (
    // Provide the selected theme's background image
    <ThemeProvider
      theme={{ backgroundImage: selectedThemeData?.backgroundImage }}
    >
      <AppWrp>
        <WeatherDataProvider>
          <Header />
          <MainWrp>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<HomeMeteo />} />
                <Route path="/homeforecast" element={<HomeForecast />} />
                <Route path="/city-meteo/:name" element={<CityMeteo />} />
                <Route
                  path="/city-meteo/:name/forecast"
                  element={<CityForecast />}
                />
              </Routes>
            </Suspense>
          </MainWrp>
          <Footer />
        </WeatherDataProvider>
        <ThemeSwitch
          toggleTheme={toggleTheme}
          currentTheme={selectedThemeData}
        />
      </AppWrp>
    </ThemeProvider>
  );
};

export default App;
