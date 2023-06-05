import { allCountriesDataAPI } from '../api.js';
import { createListElement } from './country-box.js';

const allCountryList = await allCountriesDataAPI();

export const renderCountryList = (query, region) => {
  const countryListContainer = document.querySelector('#countryList');
  countryListContainer.innerHTML = "";

  if(query || region) {
    const filteredCountries = allCountryList.filter((country) => {
      return (country.name.common.toLowerCase().includes(query) && (region === 'All' || country.region === region));
    });

    filteredCountries.forEach(country => {
      countryListContainer.appendChild(createListElement(country));
    });
  } else {
    allCountryList.forEach(country => {
      countryListContainer.appendChild(createListElement(country));
    });
  }
};