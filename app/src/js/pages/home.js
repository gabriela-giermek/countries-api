import { searchEvents } from '../events.js';
import { renderCountryList } from '../dom/country-list.js';

export const loadCountryList = () => {
  searchEvents();
  renderCountryList();
};