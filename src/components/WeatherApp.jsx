import React from "react";

const WeatherApp = ({ location, data }) => {
  const kelvinToCelsius = (temp) => {
    return `${(temp - 273).toFixed(1)}°C`;
  };

  if (location == "" || data.ok == false) {
    return null;
  }

  return (
    <div className="flex justify-between items-center">
      <div className="p-4">
        <div>
          <p className="text-lg"> {location} </p>
        </div>
        <div>
          <p className="text-4xl font-bold ">
            {kelvinToCelsius(data.main.temp)}
          </p>
        </div>
        <div>
          <p className="text-lg"> Clouds </p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-2">
          <p className="font-light text-slate-700"> Feels like </p>
          <p className="font-semibold">
            {" "}
            {kelvinToCelsius(data.main.feels_like)}{" "}
          </p>
        </div>

        <div className="flex gap-2">
          <p className="font-light text-slate-700"> Humidity </p>
          <p className="font-semibold"> {data.main.humidity}% </p>
        </div>

        <div className="flex gap-2">
          <p className="font-light text-slate-700"> Wind Speed </p>
          <p className="font-semibold"> {data.wind.speed}MPH </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
