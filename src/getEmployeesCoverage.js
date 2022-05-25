const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function personId(id) {
  const person = data.employees.find((element) => element.id === id.id);
  return {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name),
    locations: person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name)
      .map((animalName) => species.find((animal) => animal.name === animalName).location),
  };
}

function personFirstName(firstName) {
  const person = data.employees.find((element) => element.firstName === firstName.name);
  return {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name),
    locations: person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name)
      .map((animalName) => species.find((animal) => animal.name === animalName).location),
  };
}

function personLastName(lastName) {
  const person = data.employees.find((element) => element.lastName === lastName.name);
  return {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name),
    locations: person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name)
      .map((animalName) => species.find((animal) => animal.name === animalName).location),
  };
}

function generateAllEmployeesCoverage() {
  const persona = data.employees.map((element) => element.id);

  return persona.map((id, index) => {
    const person = data.employees.find((element) => element.id === id);
    const obj = {
      id: '',
    };
    obj.id = persona[index];
    obj.fullName = `${person.firstName} ${person.lastName}`;
    obj.species = person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name);
    obj.locations = person.responsibleFor
      .map((animalId) => species.find((element) => element.id === animalId).name)
      .map((animalName) => species.find((animal) => animal.name === animalName).location);

    return obj;
  });
}
function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return generateAllEmployeesCoverage();
  }
  const ids = data.employees.map((element) => element.id);
  const firstNames = data.employees.map((element) => element.firstName);
  const lastNames = data.employees.map((element) => element.lastName);
  if (ids.includes(obj.id)) {
    return personId(obj);
  }
  if (firstNames.includes(obj.name)) {
    return personFirstName(obj);
  }
  if (lastNames.includes(obj.name)) {
    return personLastName(obj);
  }
  throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
