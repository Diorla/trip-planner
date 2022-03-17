"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
require("colors");
const port = 1960;
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const dotenv = require("dotenv");
dotenv.config();

const environment = process.env.NODE_ENV || "development";

const config =
  environment === "development"
    ? require("../../webpack.dev.js")
    : require("../../webpack.prod.js");

const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(express.json());

app.use(cors());

app.use(express.static("dist"));

app.get("/", (_req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(port, () => {
  console.log(
    `Server listening at ${("http://localhost:" + port).blue.underline}`
  );
});
