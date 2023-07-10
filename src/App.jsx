import React, { useEffect, useState } from "react";
import Descriptions from "./components/Descriptions";
import { getFormattedWeatherData } from "./weatherAPI";
import ErrorCard from "./components/ErrorCard";

function App() {
  const [city, setCity] = useState("delhi");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState("hot");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
  
      console.log(data);
      
      console.log('*');
      setWeather(data);
  
      const threshold = units === "metric" ? 20 : 68;
      setBg(data.temp <= threshold ? "cold" : "hot");
    };
    
    fetchWeatherData();
  }, [city, units]);

  const handleUnitsClick = (e) => {
    const button = e.target;
    const currentUnit = button.innerText.slice(1);
    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
      e.target.blur();
    }
  };

  return (
    <div
      className={`w-screen h-screen bg-${bg} bg-cover bg-no-repeat bg-center`}
    >
      <div className="h-full w-full bg-overlay-background z-10">
        {weather && (weather.status === 200 ? (
          <div className="max-w-xl m-auto h-full flex flex-col items-center justify-between p-4">
            <div className="w-full p-4 rounded-lg text-white flex items-center justify-between bg-overlay-section backdrop-blur">
              <input
                type="text"
                placeholder="Enter City..."
                onKeyDown={enterKeyPressed}
                className="border-0.5 border-gray-300 rounded bg-transparent text-white p-2 text-xl font-extralight focus:outline-none"
              />
              <button
                onClick={(e) => handleUnitsClick(e)}
                className="px-12 py-2 rounded text-xl font-medium bg-white text-black"
              >
                °F
              </button>
            </div>

            <div className="w-full p-4 rounded-lg text-white flex items-center justify-between bg-overlay-section backdrop-blur">
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-extralight capitalize">
                  {weather.name}, {weather.country}
                </h3>
                <img src={weather.iconURL} alt="weatherIcon" className="w-20" />
                <h3>{weather.description}</h3>
              </div>

              <div>
                <h1 className="text-6xl font-bold">
                  {weather.temp.toFixed()}°{units === "metric" ? "C" : "F"}
                </h1>
              </div>
            </div>

            <Descriptions weather={weather} units={units} />
          </div>
        ) : (
          <ErrorCard status={weather.status} enterKeyPressed={enterKeyPressed} />
        ))}
      </div>
    </div>
  );
}

export default App;
