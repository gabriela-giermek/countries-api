export const allCountriesDataAPI = async () => {
  const url = 'https://restcountries.com/v3.1/all?fields=cca3,flags,name,population,region,capital';
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export const countryDataAPI = async (countryCode) => {
  if(countryCode) {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}/?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`;
    const res = await fetch(url);
    const data = await res.json();
  
    return data;
  }
};