const Node = require('museria/src/node')();
const ServerExpressMuseriaGlobal = require('./server/transports/express')();

module.exports = (Parent) => {  
  return class NodeMuseriaGlobal extends (Parent || Node) {
    static get ServerTransport () { return ServerExpressMuseriaGlobal }
  }
};