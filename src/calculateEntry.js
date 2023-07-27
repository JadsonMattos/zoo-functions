const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      count.child += 1;
    } else if (age < 50) {
      count.adult += 1;
    } else {
      count.senior += 1;
    }
    if (!entrants || entrants.length === 0) return {};
  });
  return count;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const entrantsCount = countEntrants(entrants);
  const { child, adult, senior } = entrantsCount;
  const total = child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
