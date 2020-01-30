const Node = require('museria/src/node')();
const ServerExpressMuseriaGlobal = require('./server/transports/express')();
const LoggerAdapter = require('spreadable/src/logger/transports/adapter')();

module.exports = (Parent) => {  
  return class NodeMuseriaGlobal extends (Parent || Node) {
    static get ServerTransport () { return ServerExpressMuseriaGlobal }
    static get LoggerTransport () { return LoggerAdapter }
  }
};