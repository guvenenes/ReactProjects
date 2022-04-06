import "./App.css";
import Main from "./components/Main";
import { WeatherProvider } from "./context/WeatherContext";
function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <Main />
      </div>
    </WeatherProvider>
  );
}

export default App;
