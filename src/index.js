const { createServer } = require("./lib/modules/express");
const { createConnection } = require("./lib/modules/mysql");

const startBackend = () => {
  console.log(`[=----] Loading... [EXPRESS]`);
  createServer(() => console.log(`EXPRESS server is on!`));
  console.log(`[==---] Loading... [EXPRESS Settings]`);
  console.log(`[===--] Loading... [MYSQL]`);
  createConnection(() => console.log(`MYSQL connection created!`));
  console.log(`[====-] Loading... [CFGS]`);
  console.log(`[=====] Loading... [OTHER]`);
  console.log(`Backend status: RUNNING`);
};

module.exports = startBackend;
