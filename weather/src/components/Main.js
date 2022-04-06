import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import Weather from "./Weather";
import axios from "axios";

function Main() {
  const { selectedCity, setWeatherData, setIsLoading } = useWeather();
  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity.lat}&lon=${selectedCity.lon}&exclude=minutely,hourly&lang=tr&units=metric&APPID=7a8fac2317f446aa61dca23e665cb89e
        `).then((res) => {
      setWeatherData(res.data);
      setIsLoading(false);
    });
  }, [selectedCity]);
  return (
    <div>
      <Weather />
    </div>
  );
}

export default Main;
