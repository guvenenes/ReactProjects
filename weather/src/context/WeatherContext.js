import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState({
    city: "Adana",
    lat: "37.00167",
    lon: "35.32889",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();

  const values = {
    selectedCity,
    setSelectedCity,
    weatherData,
    setWeatherData,
    isLoading,
    setIsLoading,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
