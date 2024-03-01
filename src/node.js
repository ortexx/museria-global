import node from 'museria/src/node.js';
import serverExpressMuseriaGlobal from './server/transports/express/index.js';
import loggerAdapter from 'spreadable/src/logger/transports/adapter/index.js';

const Node = node();
const ServerExpressMuseriaGlobal = serverExpressMuseriaGlobal();
const LoggerAdapter = loggerAdapter();

export default (Parent) => {  
  return class NodeMuseriaGlobal extends (Parent || Node) {
    static get ServerTransport () { return ServerExpressMuseriaGlobal }
    static get LoggerTransport () { return LoggerAdapter }

    /**
     * @see Node.prototype.checkDocumentAvailability
     */
    async checkDocumentAvailability(info) {
      if(this.options.face && info.collection == 'music') {
        return false;
      }
      
      return super.checkDocumentAvailability.apply(this, arguments);
    }
  }  
};