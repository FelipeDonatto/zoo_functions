const data = require('../data/zoo_data');

const byFirstName = (name) => data.employees.find(({ firstName }) => firstName === name);
const byLastName = (name) => data.employees.find(({ lastName }) => lastName === name);

function getEmployeeByName(employeeName) {
  if (byFirstName(employeeName) !== undefined) {
    return byFirstName(employeeName);
  }
  if (byLastName(employeeName) !== undefined) {
    return byLastName(employeeName);
  }
  return {};
}

console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
