"use strict";

// connect to the database
const Database = require("better-sqlite3");
const db = new Database("./model/database.db", { verbose: console.log });

const getAll = () => {
  // prepare a SQL statement to execute, and execute it (?)
  const stmt = db.prepare("SELECT * FROM example");
  // return all the results
  return stmt.all();
};

module.exports.getAll = getAll;
