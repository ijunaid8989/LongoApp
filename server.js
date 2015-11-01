var express = require('express')
  , app = express()
  , MongoClient = require('mongodb').MongoClient
  , bodyParser = require('body-parser');


app.use(bodyParser.json());

var url = 'mongodb://localhost:27017/longo';

var people;

MongoClient.connect(url, function(err, db) {
	people = db.collection('people');
  	console.log("Connected correctly to server");
});

//var people = db.collection('people');



app.set('view engine', 'ejs')


app.get("/",function(req,res){
	res.render('index');
});

app.listen(3000);