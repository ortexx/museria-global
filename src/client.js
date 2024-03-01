import client from 'museria/src/client.js';
const Client = client();

export default (Parent) => {
  return class ClientMuseriaGlobal extends (Parent || Client) {}
};