import { countryDataAPI } from '../api.js';
import { fillDetailsTemplate } from '../dom/country-details';

const getCountryCodeFromUrl = () => {
  const params = new URLSearchParams(document.location.search);
  const code = params.get('country');

  return code;
};

const currentCountryData = await countryDataAPI(getCountryCodeFromUrl());

export const loadCountryDetails = () => {
  fillDetailsTemplate(currentCountryData);
};