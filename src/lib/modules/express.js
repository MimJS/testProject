const express = require("express");
const resolveRequest = require("../../api");
const { port, postUrl } = require("../cfgs/config.express");
const cors = require('cors');

const createServer = (callback) => {
  const app = express();
  app.use(express.json());
  app.use(cors({
      origin: '*'
  }));
  app.post(postUrl, (req, res) => {
    console.log("New request");
    resolveRequest(req, res);
  });
  app.get("/", (req, res) => {
    res.sendStatus(503);
  });
  app.listen(port, () => console.log(`port listen: ${port}`));
  callback();
};

module.exports = { createServer };
