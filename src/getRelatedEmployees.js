const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees.filter((employee) =>
      employee.managers.includes(managerId))
      .map((employee) => employee.id)
      .map((id) => {
        const manager = data.employees.find((employee) => employee.id === id);
        return `${manager.firstName} ${manager.lastName}`;
      });
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
