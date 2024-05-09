import { useState } from "react";
import { countries } from "../data/countries";
import { SearchType } from "../types";
import { toast } from "react-toastify";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;
};

const Form = ({ fetchWeather }: FormProps) => {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      toast.error("Please fill out all fields");
      return;
    }
    fetchWeather(search);
  };
  return (
    <form className="p-10" onSubmit={handleSubmit}>
      <div className="flex flex-col my-5">
        <label htmlFor="city" className="text-2xl">
          Ciudad:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Ciudad"
          className=" rounded-md text-xl p-1 bg-transparent border-white border-2"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col my-5">
        <label htmlFor="country" className="text-2xl">
          País:
        </label>
        <select
          name="country"
          id="country"
          className=" rounded-md text-xl p-1 bg-transparent border-white border-2"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">--Seleccione un país--</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value="Consultar Clima"
        className=" bg-amber-500 w-full rounden uppercase rounded-md font-bold p-1"
      />
    </form>
  );
};

export default Form;
