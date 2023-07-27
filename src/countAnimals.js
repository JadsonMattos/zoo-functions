const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species: speciesName, sex } = animal || {};
  const { species } = data;
  if (!speciesName) {
    return species.reduce((specie, { name, residents }) => ({
      ...specie, [name]: residents.length }), {});
  }
  const { residents } = species.find(({ name }) => name === speciesName);
  return sex ? residents.filter((resident) => resident.sex === sex).length : residents.length;
};

module.exports = countAnimals;
