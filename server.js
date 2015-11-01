var express = require('express')
  , app = express()
  , http = require('http')
  , Mongolian = require('mongolian')
  , bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var server = new Mongolian
  ,	db = server.db('longo')
  , people = db.collection('people');

var ObjectId =  Mongolian.ObjectId;

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

app.get("/update/:id", urlencodedParser , function(req,res){
	people.findOne({_id: new ObjectId(req.params.id)}, function(err,doc){
		res.render("update",{person: doc});
	})
});

app.post("/update/:id", urlencodedParser,function(req,res){
	people.update({ _id: new ObjectId(req.params.id)},{
		name : req.body.name,
		job : req.body.job
	}, function(err,item){
		res.redirect('/');
	});
});

app.get("/delete/:id", urlencodedParser ,function(req,res){
	people.remove({_id: new ObjectId(req.params.id)}, function(err){
		res.redirect('/');
	});
});

http.createServer(app).listen(3000);