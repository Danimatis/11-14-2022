import { useEffect, useState } from "react";
import Country from "./country";
import CountryForm from "./countryForm";
const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name"
      );
      const countries = await response.json();
      const countryNames = countries
        .map((country) => country.name.common)
        .sort();
      setCountries(countryNames);
    };
    if (!countries) {
      return ".....Loading";
    }
    getAllCountries();
  }, []);
  const handlePickedCountry = ({ target: { value } }) => {
    setCountry(value);
  };
  const handleSubmitCountry = () => {
    setSelectedCountries([...selectedCountries, { name: country }]);
  };
  return (
    <div className="d-flex justify-content-around">
      <div className="text-center m-3 w-25 d-flex flex-column align-items-center  flex-grow-2">
        <select
          className="form-select my-2"
          onChange={handlePickedCountry}
          name=""
          id=""
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>{" "}
        <button className="btn btn-primary" onClick={handleSubmitCountry}>
          Add To Saved Countries
        </button>
        <div className="my-4">
          {country ? (
            <Country countryName={country} />
          ) : (
            <h1 className="text-center">Please Pick a Country</h1>
          )}
        </div>
      </div>
      <div className="flex-grow-1">
        <h3 className="my-3 text-center">Saved Countries</h3>
        <div className="d-flex flex-wrap  ">
          {selectedCountries ? (
            <CountryForm selectedCountries={selectedCountries} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default CountryList;
