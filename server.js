var express = require('express')
  , app = express()
  , http = require('http')
  , Mongolian = require('mongolian')
  , bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var server = new Mongolian
  ,	db = server.db('longo')
  , people = db.collection('people');



app.use(bodyParser.json());

app.set('view engine', 'jade');


app.get("/",function(req,res){
	people.find().toArray(function(err,docs){
		res.render('index', { people : docs });
	});
});

app.post("/",urlencodedParser,function(req,res){
	people.insert({
		name : req.body.name,
		job : req.body.job
	}, function(err,doc){
		res.redirect('/');
	});
});


http.createServer(app).listen(3000);