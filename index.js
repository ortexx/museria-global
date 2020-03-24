const Node = require('./src/node')();
const config = require('./museria.config');
const runner = require('./runner');

process.on('uncaughtException', (err) => { 
  console.error(err.stack);
  process.exit(1);
});

runner(config, Node);