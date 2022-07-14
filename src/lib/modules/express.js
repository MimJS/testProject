const express = require("express");
const resolveRequest = require("../../api");
const { port, postUrl } = require("../cfgs/config.express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const createServer = (callback, ssl) => {
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
  if (ssl) {
    const options = {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    };
    https.createServer(options, app).listen(443);
  } else {
    app.listen(port, () => console.log(`port listen: ${port}`));
    callback();
  }
};

module.exports = { createServer };
