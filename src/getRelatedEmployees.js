const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(personId) {
  const managerCheck = managers.some((element) => element === personId);
  return managerCheck;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const related = data.employees.filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
    return related;
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
