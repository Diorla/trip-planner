"use strict";
const fs = require("fs");

/**
 * Used to read json file
 * @param {(data: {[key: string]: any}) => void} callback - used to return data
 */
const fetchDB = (callback) => {
  fs.readFile(`${__dirname}/db/temp.json`, "utf-8", (err, data) => {
    if (err) throw err;
    else callback(data);
  });
};

module.exports = fetchDB;
