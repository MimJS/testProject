const express = require("express");
const resolveRequest = require("../../api");
const { port, postUrl } = require("../cfgs/config.express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const options = {
  key: fs.readFileSync(path.join(__dirname, "../../../key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../../../cert.pem")),
};

const createSSLServer = () => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
  app.post(postUrl, (req, res) => {
    console.log("New request");
    resolveRequest(req, res);
  });
  app.get("/", (req, res) => {
    res.sendStatus(503);
  });
  https.createServer(options, app).listen(443);
};

const createServer = (callback) => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
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

module.exports = { createServer, createSSLServer };
