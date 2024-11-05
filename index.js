const cities = [
    {
      "id": 301,
      "name": "New York",
      "population": 8398748,
      "country": "United States"
    },
    {
      "id": 302,
      "name": "Paris",
      "population": 2140526,
      "country": "France"
    },
    {
      "id": 303,
      "name": "Tokyo",
      "population": 13960000,
      "country": "Japan"
    },
    {
      "id": 304,
      "name": "Sydney",
      "population": 5230330,
      "country": "Australia"
    },
    {
      "id": 305,
      "name": "Cairo",
      "population": 9121515,
      "country": "Egypt"
    }
  ];

  
/* *********************************************************************************** */


/* ----------------- Q.1 ----------------- */
function getCityPopulation(city) {
    return city.population;
}
//   console.log(getCityPopulation(cities[0]));


/* ----------------- Q.2 ----------------- */
function isPopulationAboveThreshold(city, threshold) {
    if (city.population >= threshold)
        return  true;
    else return false;
}
//   console.log(isPopulationAboveThreshold(cities[1], 2000000));

  
/* ----------------- Q.3 ----------------- */
function addCity(cities, city) {
    cities.push(city);
    return cities;
  }
  
  const newCity = {
    "id": 306,
    "population": 1200000,
    "country": "Canada"
  };
  
//   console.log(addCity(cities, newCity));

  
/* ----------------- Q.4 ----------------- */
function countCitiesInCountry(cities, country) {
    let count = 0;
    if (cities.country = country)
        count++;
    return count;
  }
//   console.log(countCitiesInCountry(cities, "France"));
