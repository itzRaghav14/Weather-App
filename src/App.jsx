import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import WeatherApp from "./components/WeatherApp";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  useEffect(() => {
    data.ok = false;
    if (location) {
      axios.get(url)
        .then(res => {
          setData(data => res.data);
          data.ok = true;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
          setData({});
          data.ok = false;
          setLocation('');
        });
    }
  }, [location]);

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  };

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center">
      <div className="container max-w-xl bg-white rounded-lg shadow-md">
        <div className="p-4 flex justify-center">
          <input
            type="text"
            placeholder="Enter Location"
            onKeyDown={(e) => searchLocation(e)}
            className="pb-1 border-b border-black border-opacity-30 focus:outline-none w-min"
          />
        </div>

        <WeatherApp location={location} data={data} />
        
      </div>
    </div>
  );
}

export default App;
