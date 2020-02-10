const Node = require('./src/node')();
const config = require('./museria.config');
const runner = require('./runner');
runner(config, Node);