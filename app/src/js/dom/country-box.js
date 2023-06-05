 const createCountryBoxElement = async () => {
  const res = await fetch('../../template-parts/country-box.html');
  const boxContent = await res.text();
  const boxWrapper = document.createElement('div');

  boxWrapper.classList.add('countries__list-item', 'col');
  boxWrapper.innerHTML = boxContent;

  return boxWrapper;
};

const countryBoxTemplate = await createCountryBoxElement();

export const createListElement = (country) => {
  const countryBox = countryBoxTemplate.cloneNode(true);
  const countryLink = countryBox.querySelector('.country-link');
  const countryFlag = countryBox.querySelector('.country-flag');
  const countryName = countryBox.querySelector('.country-name');
  const countryPopulation = countryBox.querySelector('.country-population');
  const countryRegion = countryBox.querySelector('.country-region');
  const countryCapital = countryBox.querySelector('.country-capital');

  countryLink.href = `/country-details.html?country=${country.cca3}`;
  countryFlag.src = country.flags.svg;
  countryFlag.alt = country.flags.alt;
  countryName.innerText = country.name.common;
  countryPopulation.innerText = country.population;
  countryRegion.innerText = country.region;
  countryCapital.innerText = Object.values(country.capital).join(", ");

  return countryBox;
};