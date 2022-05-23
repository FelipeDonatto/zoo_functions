const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(obj) {
  if (typeof obj !== 'object') {
    return species.reduce((accumulator, index) => {
      accumulator[index.name] = index.residents.length;
      return accumulator;
    }, {});
  }
  const objSize = Object.keys(obj).length;
  const animal = species.find((element) => element.name === obj.specie);
  if (objSize === 1) {
    return animal.residents.length;
  }
  const sex = animal.residents.filter((element) => element.sex === obj.sex);
  return sex.length;
}

// ficou meio confuso mas deu certo
// console.log(countAnimals({ specie: 'bears', sex: 'male' }));
module.exports = countAnimals;
