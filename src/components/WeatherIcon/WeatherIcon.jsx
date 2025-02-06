export default function WeatherIcon({ img }) {
  return (
    <>
      <img src={img.img} alt={img.imgAlt} />
    </>
  );
}
