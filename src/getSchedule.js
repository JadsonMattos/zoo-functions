const data = require('../data/zoo_data');

const informations = () => {
  const { species, hours } = data;
  const days = Object.keys(hours);
  const newObject = days.reduce((information, entrie) => ({
    ...information,
    [entrie]: {
      officeHour: `Open from ${hours[entrie].open}am until ${hours[entrie].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(entrie))
        .map((element) => element.name),
    },
  }), {});
  newObject.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return newObject;
};

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return (informations());
  }
  if (scheduleTarget === 'Monday') {
    return { [scheduleTarget]: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!' } };
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: informations()[scheduleTarget] };
  }
  const targetSpecies = data.species.find((specie) => specie.name === scheduleTarget);
  if (targetSpecies) {
    const availableDays = data.species.filter((specie) => specie.name === scheduleTarget)
      .flatMap((specie) => specie.availability);
    return availableDays;
  }
  return informations();
};

module.exports = getSchedule;
