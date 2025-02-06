export default function WeatherData({ data }) {
  return (
    <>
      <p>
        <span>conditions: {data.conditions} </span>
      </p>
      <p>
        <span>time: {data.time} </span>
      </p>
    </>
  );
}
