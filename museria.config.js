const argv = require('optimist').argv;

module.exports = {
  port: argv.port || 2079,
  initialNetworkAddress: argv.initialNetworkAddress || 'storage.museria.com:80',
  publicPort: argv.publicPort,
  hostname: argv.hostname,  
  logger: {
    level: argv.loggerLevel || 'error'
  },
  collections: {
    music: {
      limit: argv.collectionsMusicLimit || 100000
    }
  },
  storage: {
    dataSize: argv.storageDataSize || '90%',
    tempSize: argv.storageTempSize || '10%'
  }
}