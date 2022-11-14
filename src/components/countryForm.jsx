import Country from "./country";
const CountryForm = ({ selectedCountries }) => {
  console.log(selectedCountries);
  return (
    <>
      {selectedCountries.map(({ name }) => (
        <Country key={name} countryName={name} />
      ))}
    </>
  );
};
export default CountryForm;
