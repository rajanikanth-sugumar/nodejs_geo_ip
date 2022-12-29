const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./db/geo.db');
var createQuery = 'CREATE TABLE GEO (GEO VARCHAR(200));';

db.run(createQuery , (err) => {
if(err) return;
console.log("Table Created");
});