// const zoo_data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...str) {
  return str.map((element) => species.find(({ id }) => id === element));
}
// nota mental - javascript é estranho

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));
module.exports = getSpeciesByIds;
