const createBordersButtons = (container, borders) => {
  const countryBordersWrapper = container.querySelector('.country-borders');
  const countryBordersList = container.querySelector('.country-borders-list');

  if(borders.length) {
    borders.forEach(border => {
      const btn = document.createElement('a');
    
      btn.innerText = border;
      btn.classList.add('country-details__borders-item', 'btn', 'btn--primary');
      btn.href = `/country-details.html?country=${border}`;
  
      countryBordersList.appendChild(btn);
    });

    countryBordersWrapper.classList.remove('d-none');
  }
};

export const fillDetailsTemplate = (countryData) => {
  const detailsContainer = document.querySelector('.country-details');
  const countryFlag = detailsContainer.querySelector('.country-flag');
  const countryName = detailsContainer.querySelector('.country-name');
  const countryNativeName = detailsContainer.querySelector('.country-native-name');
  const countryPopulation = detailsContainer.querySelector('.country-population');
  const countryRegion = detailsContainer.querySelector('.country-region');
  const countrySubregion = detailsContainer.querySelector('.country-subregion');
  const countryCapital = detailsContainer.querySelector('.country-capital');
  const countryDomain = detailsContainer.querySelector('.country-domain');
  const countryCurrency = detailsContainer.querySelector('.country-currency');
  const countryLang = detailsContainer.querySelector('.country-lang');

  countryFlag.src = countryData.flags.svg;
  countryFlag.alt = countryData.flags.alt;
  countryName.innerText = countryData.name.common;
  countryNativeName.innerText = Object.values(countryData.name.nativeName)[0].official;
  countryPopulation.innerText = countryData.population;
  countryRegion.innerText = countryData.region;
  countrySubregion.innerText = countryData.subregion;
  countryCapital.innerText = Object.values(countryData.capital).join(", ");
  countryDomain.innerText = Object.values(countryData.tld).join(", ");
  countryCurrency.innerText = Object.values(countryData.currencies).map((currency) => currency.name).join(", ");
  countryLang.innerText = Object.values(countryData.languages).join(", ");

  createBordersButtons(detailsContainer, countryData.borders);
};