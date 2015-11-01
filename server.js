var express = require('express')
  , app = express()
  , mongo = require('mongodb');

var db = 




app.set('view engine', 'ejs')

app.get("/",function(req,res){
	res.render("index");
});

 app.listen(3000);