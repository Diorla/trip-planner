"use strict";
const fs = require("fs");

/**
 * Used to read json file
 * @param {string} - the name of the json file
 * @param {(data: {[key: string]: any}) => void} callback - used to return data
 */
const fetchDB = (path, callback) => {
  fs.readFile(`${__dirname}/db/${path}.json`, "utf-8", (err, data) => {
    if (err) throw err;
    else {
      const parsedData = JSON.parse(data);
      callback(parsedData);
    }
  });
};

module.exports = fetchDB;
