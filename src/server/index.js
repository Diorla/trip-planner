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
const dateRangeGenerator = require("./dateRangeGenerator");

/**
 * Please check README.md for environmental variables
 */
app.use(express.json());

app.use(cors());

app.use(express.static("dist"));

/**
 * Returns homepage
 */
app.get("/", (_req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

/**
 * returns list of trips
 */
app.get("/trips", (_req, res) => {
  fetchDB("trips", (data) => {
    res.json(data);
  });
});

/**
 * returns list of bookmarked trips
 */
app.get("/saved-trips", (_req, res) => {
  fetchDB("saved", (data) => {
    res.json(data);
  });
});

/**
 * adds location to the list of saved trip
 */
app.post("/save-location", (req, res) => {
  const { body } = req;
  updateDB("saved", body, () => res.status(200).end(`${body.name} saved`));
});

/**
 * add new trip
 */
app.post("/save-trip", (req, res) => {
  const { body } = req;
  updateDB("trips", body, () =>
    res.status(200).end(`Trip to ${body.name} added`)
  );
});

/**
 * Fetch last added trip
 */
app.get("/last-trip", (_req, res) => {
  fetchDB("trips", (data) => {
    const lastIdx = data.length - 1;
    res.json(data[lastIdx]);
  });
});

/**
 * Returns list of cities that matches the search term
 */
app.get("/city-search", async (req, res) => {
  const { q } = req.query;
  const response = await fetch(
    `http://api.geonames.org/searchJSON?q=${q}&username=${process.env.geonameUser}&maxRows=10`
  );
  const data = await response.json();

  res.json(data);
});

/**
 * Returns images that matches the search term
 */
app.get("/image", async (req, res) => {
  const { q } = req.query;
  const response = await fetch(
    `https://pixabay.com/api/?key=${process.env.PIXABAY}&q=${q}|not-found&image_type=photo`
  );
  const data = await response.json();

  res.json(data);
});

/**
 * Returns the weather report for a particular location based on long and lat
 */
app.get("/weather", async (req, res) => {
  const { long, lat } = req.query;
  const { start, end } = dateRangeGenerator();
  const API_KEY = process.env.weatherAPI;
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/history/daily?lat=${long}&lon=${lat}&key=${API_KEY}&start_date=${start}&end_date=${end}`
  );
  const data = await response.json();

  res.json(data);
});

/**
 * Used to fetch information about a particular location
 */
app.get("/get-location", async (req, res) => {
  const { id } = req.query;
  const response = await fetch(
    `http://api.geonames.org/getJSON?geonameId=${id}&username=${process.env.geonameUser}`
  );
  const data = await response.json();

  res.json(data);
});

/**
 * Dynamic response to fetching pages e.g. `/explore` will get `dist/explore.html`
 */
app.get("*", (req, res) => {
  const currentPath = req.path.replace("/", "");
  res.sendFile(path.resolve(`dist/${currentPath}.html`));
});

/**
 * Get server up and running
 */
app.listen(port, () => {
  console.log(
    `Server listening at ${("http://localhost:" + port).blue.underline}`
  );
});
