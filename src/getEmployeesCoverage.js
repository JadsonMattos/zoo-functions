const data = require('../data/zoo_data');

const output = data.employees.map((employee) => {
  const array = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((speciesId) => data.species
      .find((specie) => specie.id === speciesId).name),
    locations: employee.responsibleFor.map((speciesId) => data.species
      .find((specie) => specie.id === speciesId).location),
  };
  return array;
});

const getEmployeesCoverage = (input) => {
  if (!input) {
    return output;
  }

  const verify = output.find((newImput) => newImput.fullName.includes(Object.values(input))
  || newImput.id.includes(Object.values(input)));
  if (!verify) {
    throw new Error('Informações inválidas');
  }
  return verify;
};

module.exports = getEmployeesCoverage;
