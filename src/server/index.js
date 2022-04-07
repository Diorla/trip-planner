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
const fetch = require("isomorphic-fetch");

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

app.post("/save-location", (req, res) => {
  const { body } = req;
  updateDB("saved", body, () => res.status(200).end(`${body.name} saved`));
});

app.post("/save-trip", (req, res) => {
  const { body } = req;
  updateDB("trips", body, () =>
    res.status(200).end(`Trip to ${body.name} added`)
  );
});

app.get("/city-search", async (req, res) => {
  const { q } = req.query;
  console.log({ q });
  const response = await fetch(
    `http://api.geonames.org/searchJSON?q=${q}&username=${process.env.geonameUser}&maxRows=10`
  );
  const data = await response.json();

  res.json(data);
});

app.get("/get-location", async (req, res) => {
  const { id } = req.query;
  const response = await fetch(
    `http://api.geonames.org/getJSON?geonameId=${id}&username=${process.env.geonameUser}`
  );
  const data = await response.json();

  res.json(data);
});

app.post("/update", (req, res) => {
  updateDB("temp", req.body, () => {
    res.status(200).send("Request successful");
  });
});

app.get("*", (req, res) => {
  const currentPath = req.path.replace("/", "");
  res.sendFile(path.resolve(`dist/${currentPath}.html`));
});

app.listen(port, () => {
  console.log(
    `Server listening at ${("http://localhost:" + port).blue.underline}`
  );
});
