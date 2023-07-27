const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const identification = data.employees.find((employee) => employee.id === id);

  const firstSpecie = identification.responsibleFor[0];

  const allAnimals = data.species.find((specie) => specie.id === firstSpecie);

  const oldestAnimal = allAnimals.residents.reduce((oldest, resident) => {
    if (resident.age > oldest.age) {
      return resident;
    }
    return oldest;
  });
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
