import node from './src/node.js';
import config from './museria.config.js';
import runner from './runner.js';

const Node = node();

process.on('uncaughtException', (err) => { 
  console.error(err.stack);
  process.exit(1);
});

runner(config, Node);