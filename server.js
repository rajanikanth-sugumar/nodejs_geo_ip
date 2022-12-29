const express = require("express");
const app = express();
const fs = require('fs');
const router = express.Router();
var bodyParser = require('body-parser');
var tempo;
const sqlite3 = require('sqlite3').verbose();
const pug = require('pug');
const path = require('path');
let db = new sqlite3.Database('./db/geo.db');

app.use(express.static("public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

router.get('/index.html', (req, res) => 
{

})

app.post('/', function(req, res)
{
 
  let geoloc = ""; 
  tempo = req.body;
  geoloc = JSON.stringify(tempo);
  
  let myObj = {   
    geoip: geoloc,
  };
  
    var insertQuery = 'INSERT INTO GEO (GEO) VALUES (:geoip)';
    db.run(insertQuery , [myObj.geoip], (err) => {
	  if(err) return;
  
		
		});   
      
});
    

//Listening
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
