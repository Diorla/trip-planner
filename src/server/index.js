"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
require("colors");
const port = 1963;
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const updateDB = require("./updateDB");
const fetchDB = require("./fetchDB");

app.use(express.json());

app.use(cors());

app.use(express.static("dist"));

app.get("/", (_req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/trips", (_req, res) => {
  fetchDB("trips", (data) => {
    res.json(data);
  });
});

app.get("/saved", (_req, res) => {
  fetchDB("saved", (data) => {
    res.json(data);
  });
});

app.post("/update", (req, res) => {
  updateDB("temp", req.body, () => {
    res.status(200).send("Request successful");
  });
});

app.get("*", (req, res) => {
  const currentPath = req.path.replace("/", "");
  console.log({ currentPath });
  res.sendFile(path.resolve(`dist/${currentPath}.html`));
});

app.listen(port, () => {
  console.log(
    `Server listening at ${("http://localhost:" + port).blue.underline}`
  );
});
