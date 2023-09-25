// App.js
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { AppWrp, MainWrp } from "./App-styles";
import { WeatherDataProvider } from "./Context/WeatherDataContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ThemeSwitch from "./Components/ThemeSwitch/Theme-switch";

const themes = {
  warm: {
    backgroundImage: 'url("/assets/images/warm-background.jpg")',
  },
  cold: {
    backgroundImage: 'url("/assets/images/cold-background.jpg")',
  },
};

const HomeMeteo = lazy(() => import("./Pages/HomeMeteo/HomeMeteo"));
const HomeForecast = lazy(() => import("./Pages/HomeForecast/HomeForecast"));
const CityMeteo = lazy(() => import("./Pages/CityMeteo/CityMeteo"));
const CityForecast = lazy(() => import("./Pages/CityForecast/CityForecast"));

function App() {
  const [theme, setTheme] = useState("warm");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("warm");
      window.localStorage.setItem("theme", "warm");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "warm" ? "cold" : "warm";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppWrp>
        <WeatherDataProvider>
          <Header />
          <MainWrp>
            <Suspense fallback={<div>Loading...</div>}>
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
        <ThemeSwitch toggleTheme={toggleTheme} currentTheme={theme} />
      </AppWrp>
    </ThemeProvider>
  );
}

export default App;
