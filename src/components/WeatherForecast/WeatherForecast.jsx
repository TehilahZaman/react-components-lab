import WeatherData from "../WeatherData/WeatherData.jsx";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  const { day } = props;
  return (
    <div className="weather">
      <h2>{day}</h2>
      <WeatherIcon img={props} />
      <WeatherData data={props} />
    </div>
  );
};

export default WeatherForecast;
