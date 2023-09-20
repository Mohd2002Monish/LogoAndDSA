const tickets = {
  Paris: "Skopje",
  Zurich: "Amsterdam",
  Prague: "Zurich",
  Barcelona: "Berlin",
  Kiev: "Prague",
  Skopje: "Paris",
  Amsterdam: "Barcelona",
  Berlin: "Kiev",
  Berlin: "Amsterdam",
};
let cities = {
  Kiev: false,
  Amsterdam: false,
  Zurich: false,
  Prague: false,
  Berlin: false,
  Bercelona: false,
};
const citiesCount = (cities) => {
  let count = 0;
  for (let key in cities) {
    ++count;
  }
  return count;
};
const findRoutes = (cities, tickets) => {
  let count = 0;
  let currentCity = "Kiev";
  let res = "";
  let numberOfCities = citiesCount(cities);
  while (count < numberOfCities) {
    count++;
    cities[currentCity] = true;
    res = res + currentCity + " " + "-> ";
    currentCity = tickets[currentCity];
  }
  return res;
};
console.log(findRoutes(cities, tickets));
