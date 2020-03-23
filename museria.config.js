const argv = require('yargs').argv;
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });
const loggerLevel = argv.loggerLevel || process.env.MUSERIA_LOGGER_LEVEL;
const split = loggerLevel.split(',');
const loggerLevelConsole = split[0];
const loggerLevelFile = split[1] || loggerLevelConsole;

module.exports = {
  port: argv.port || 2079,
  initialNetworkAddress: argv.initialNetworkAddress || process.env.MUSERIA_INITIAL_NETWORK_ADDRESS,
  publicPort: argv.publicPort || process.env.MUSERIA_PUBLIC_PORT,
  hostname: argv.hostname || process.env.MUSERIA_HOSTNAME,
  logger: {
    transports: [
      { transport: 'LoggerConsole', options: { level: loggerLevelConsole } },
      { transport: 'LoggerFile', options: { level: loggerLevelFile } }
    ]
  },
  collections: {
    music: {
      limit: argv.collectionsMusicLimit || process.env.MUSERIA_COLLECTION_MUSIC_LIMIT
    }
  },
  storage: {
    path: argv.storagePath || process.env.MUSERIA_STORAGE_PATH,
    dataSize: argv.storageDataSize || process.env.MUSERIA_STORAGE_DATA_SIZE,
    tempSize: argv.storageTempSize || process.env.MUSERIA_STORAGE_TEMP_SIZE
  }
}