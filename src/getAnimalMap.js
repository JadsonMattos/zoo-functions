const data = require('../data/zoo_data');

const compareAnimals = (a, b) => a.localeCompare(b);

const getSortedResidentsArray = (residentsArray) => residentsArray.slice().sort(compareAnimals);

const getAnimalMap = (options) => {
  const { includeNames, sorted, sex } = options || {};
  const animalMap = {};

  data.species.forEach((species) => {
    const { location, name, residents } = species;
    const selectedResidents = sex ? residents
      .filter((resident) => resident.sex === sex) : residents;
    const residentsArray = selectedResidents.map(({ name: residentName }) => residentName);
    const sortedResidentsArray = sorted
      ? getSortedResidentsArray(residentsArray) : residentsArray;
    animalMap[location] = [...(animalMap[location] || []),
      includeNames ? { [name]: sortedResidentsArray } : name];
  });
  return animalMap;
};

module.exports = getAnimalMap;
