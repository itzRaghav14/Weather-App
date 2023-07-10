import axios from "axios";

const makeIconURL = (iconId) => {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};

export const getFormattedWeatherData = async (city, units) => {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

    const res = await axios(URL);
    const data = res.data;

    const {
      weather,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      wind: { speed },
      sys: { country },
      name,
    } = data;

    const { description, icon } = weather[0];
    const iconURL = makeIconURL(icon);
    console.log(data);

    return {
      description,
      iconURL,
      icon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name,
      status: 200
    };
  } catch (err) {
    console.log(err);
    return {
      status: err.response.status
    }
  }
};
