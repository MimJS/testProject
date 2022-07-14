const { createServer, createSSLServer } = require("./lib/modules/express");
const { createConnection } = require("./lib/modules/mysql");

const startBackend = () => {
  console.log(`[=----] Loading... [EXPRESS]`);
  createSSLServer(() => console.log(`EXPRESS server is on!`), true);
  console.log(`[==---] Loading... [EXPRESS Settings]`);
  console.log(`[===--] Loading... [MYSQL]`);
  createConnection(() => console.log(`MYSQL connection created!`));
  console.log(`[====-] Loading... [CFGS]`);
  console.log(`[=====] Loading... [OTHER]`);
  console.log(`Backend status: RUNNING`);
};

startBackend()

module.exports = startBackend;
