import { setDeafultColorMode } from './dom/switch-mode.js';
import { loadCountryList } from './pages/home';
import { loadCountryDetails } from './pages/country-details';

export const initApp = () => {
  setDeafultColorMode();

  if(window.location.search.includes("?country=")) {
    loadCountryDetails();
  } else {
    loadCountryList();
  }
};