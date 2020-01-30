const argv = require('optimist').argv;
const loggerLevel = argv.loggerLevel || 'error';
const split = loggerLevel.split(',');
const loggerLevelConsole = split[0];
const loggerLevelFile = split[1] || 'error';

module.exports = {
  port: argv.port || 2079,
  initialNetworkAddress: argv.initialNetworkAddress || 'storage.museria.com:80',
  publicPort: argv.publicPort,
  hostname: argv.hostname,
  logger: {
    transports: [
      { transport: 'LoggerConsole', options: { level: loggerLevelConsole } },
      { transport: 'LoggerFile', options: { level: loggerLevelFile } }
    ]
  },
  collections: {
    music: {
      limit: argv.collectionsMusicLimit || 100000
    }
  },
  storage: {
    path: argv.storagePath || './museria',
    dataSize: argv.storageDataSize || '90%',
    tempSize: argv.storageTempSize || '10%'
  }
}