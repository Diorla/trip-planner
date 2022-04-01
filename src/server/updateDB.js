"use strict";
const fs = require("fs");

/**
 * Used to read json file
 * @param {{[key: string]: any}} newData - thing to add to new data
 * @param {(data: {[key: string]: any}) => void} callback - used to return data
 */
const updateDB = (newData, callback) => {
  fs.readFile(`${__dirname}/db/temp.json`, "utf-8", (err, data) => {
    if (err) throw err;
    else {
      const currentData = JSON.stringify({ ...JSON.parse(data), ...newData });
      fs.writeFile(`${__dirname}/db/temp.json`, currentData, "utf-8", (err) => {
        if (err) throw err;
        callback();
      });
    }
  });
};
module.exports = updateDB;
