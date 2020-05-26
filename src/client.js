const Client = require('museria/src/client')();

module.exports = (Parent) => {
  return class ClientMuseriaGlobal extends (Parent || Client) {}
};