import { useEffect, useState } from "react";

const Country = ({ countryName }) => {
  const [country, setCountry] = useState();

  useEffect(() => {
    const getCountryDetails = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      const countryArr = await response.json();
      setCountry(countryArr[0]);
    };

    getCountryDetails();
  }, [countryName]);

  if (!country) {
    return;
  }
  return (
    <div className="d-flex justify-content-center m-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={country.flags.png}
          className="card-img-top"
          alt={country.name.common}
        />
        <div className="card-body">
          <h5 className="card-title">
            {country.name.official} ({country.name.common})
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Population: {country.population}</li>
          <li className="list-group-item">Capital: {country.capital[0]}</li>
        </ul>
        <div className="card-body"></div>
      </div>
    </div>
  );
};
export default Country;
