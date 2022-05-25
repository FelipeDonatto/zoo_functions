const data = require('../data/zoo_data');

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const managers = [stephanieId, olaId, burlId];

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((element) => element.id === id);
  const firstSpecie = data.species.find((element) => element.id === person.responsibleFor[0]);
  const olderFromSpecie = firstSpecie.residents.map((element) => element.age);
  const indexNumOfOlder = olderFromSpecie.indexOf(Math.max(...olderFromSpecie));
  return [`${firstSpecie.residents[indexNumOfOlder].name}`,
    `${firstSpecie.residents[indexNumOfOlder].sex}`, Math.max(...olderFromSpecie)];
}
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// feito com a ajuda desta documentação > https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array
module.exports = getOldestFromFirstSpecies;
