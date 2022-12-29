const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./db/geo.db');
var insertQuery = 'INSERT INTO GEO (GEO) VALUES ("Test Value200");';
            
db.run(insertQuery , (err) => {
if(err) return;
console.log("Record Inserted");
});