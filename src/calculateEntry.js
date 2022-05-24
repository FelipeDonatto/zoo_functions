const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants !== undefined) {
    const entrantsCount = {
      child: entrants.filter((element) => element.age < 18).length,
      adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
      senior: entrants.filter((element) => element.age >= 50).length,
    };
    return entrantsCount;
  }
}

function calculateEntry(entrants) {
  if (entrants !== undefined && entrants.length !== 0 && Object.keys(entrants).length > 0) {
    const numOfEntrants = countEntrants(entrants);
    const sum = (numOfEntrants.adult * 49.99) + (numOfEntrants.child * 20.99);
    return sum + (numOfEntrants.senior * 24.99);
    // gambiarra pra fugir no lint omegalul
  }
  return 0;
}

// },
// prices: {
//   adult: 49.99,
//   senior: 24.99,
//   child: 20.99,
// },
// const entrantst = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// console.log(countEntrants(entrantst));
// console.log(calculateEntry(entrantst));
module.exports = { calculateEntry, countEntrants };
