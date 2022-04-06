import { useWeather } from "../context/WeatherContext";
import CitiesData from "../json/CitiesData.json";

function Weather() {
  const { selectedCity, setSelectedCity, isLoading, weatherData } =
    useWeather();
  const capitalizeCity = (city) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  };
  const getSelectedData = (e) => {
    setSelectedCity({
      city: capitalizeCity(e.target.value),
      lat: e.target[e.target.selectedIndex].dataset.lat,
      lon: e.target[e.target.selectedIndex].dataset.lon,
    });
  };
  const dateTime = (time) => {
    return new Date(time * 1000).toLocaleDateString("tr", {
      weekday: "long",
    });
  };
  return (
    <div>
      <select name="cities" id="cities" onChange={getSelectedData}>
        {CitiesData.map((city) => (
          <option
            value={city.name}
            key={city.plate}
            data-lon={city.longitude}
            data-lat={city.latitude}
          >
            {capitalizeCity(city.name)}
          </option>
        ))}
      </select>
      <h1>{selectedCity.city}</h1>
      <h2>Haftalık Tahmin</h2>
      <div className="dailyContainer">
        <ul>
          {!isLoading &&
            weatherData.daily.map((date, index) => (
              <li key={index}>
                <h3>{dateTime(date.dt)}</h3>
                <img
                  src={require(`../icons/${date.weather[0].icon}.svg`)}
                  alt=""
                />
                <span>{Math.round(date.temp.day)}°</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Weather;
