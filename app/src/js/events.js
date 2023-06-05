import { renderCountryList } from './dom/country-list.js';
import { toggleCollapseList, collapseList } from './dom/region-list.js';
import { toggleColorMode } from './dom/switch-mode.js';

const searchInput = document.querySelector('#searchQuery');
const filterBtn = document.querySelector('#filterBtn');
const switchModeBtn = document.querySelector('.switch-mode__btn');
let searchQuery = '';
let searchRegion = 'All';

export const searchEvents = () => {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
  
    renderCountryList(searchQuery, searchRegion);
  });

  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('filter__list-item')) {
      const selectedRegion = e.target.innerText;

      toggleCollapseList();

      filterBtn.innerText = selectedRegion;
      searchRegion = selectedRegion;

      renderCountryList(searchQuery, selectedRegion);
    } else if(e.target.classList.contains('filter__btn')) {
      toggleCollapseList();
    } else {
      collapseList();
    }
  });
};

switchModeBtn.addEventListener('click', () => {
  toggleColorMode();
});