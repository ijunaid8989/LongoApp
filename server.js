var express = require('express')
  , app = express()
  , Mongolian = require('mongolian')
  , bodyParser = require('body-parser');


var server = new Mongolian
  ,	db = server.db('longo')
  , people = db.collection('people');



app.use(bodyParser.json());
//var people = db.collection('people');



app.set('view engine', 'ejs');


app.get("/",function(req,res){
	people.find().toArray(function(err,docs){
		res.render('index', { people : docs });
	});
});

app.listen(3000);