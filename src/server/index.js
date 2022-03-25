"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
require("colors");
const port = 1963;
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use(cors());

app.use(express.static("dist"));

app.get("/", (_req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/explore", (_req, res) => {
  res.sendFile(path.resolve("dist/explore.html"));
});

app.listen(port, () => {
  console.log(
    `Server listening at ${("http://localhost:" + port).blue.underline}`
  );
});
