import { Weather } from "../hooks/useWeather";
import { formatTemperature } from "../utils";

type WeatherDetailProps = {
  weather: Weather;
};

const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  return (
    <div className=" bg-white rounded-lg text-black p-10 w-[500px]">
      <h2 className=" text-center text-4xl font-bold">{weather.name}</h2>

      <p className=" text-center text-5xl font-bold my-10">
        {formatTemperature(weather.main.temp)}&deg;C
      </p>
      <div className="flex justify-between text-2xl">
        <p className="font-bold">
          Min:{" "}
          <span className="font-normal">
            {formatTemperature(weather.main.temp_min)}&deg;C
          </span>
        </p>
        <p className="font-bold">
          Max:{" "}
          <span className="font-normal">
            {formatTemperature(weather.main.temp_max)}&deg;C
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDetail;
