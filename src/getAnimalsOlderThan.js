const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, animalAge) {
  const animalSpecie = data.species.find(({ name }) => name === animal);
  const ageArray = animalSpecie.residents.map((element) => element.age);
  return ageArray.every((element) => element > animalAge);
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
