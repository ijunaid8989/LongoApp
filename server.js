var express = require('express')
  , app = express();


app.get("/",function(req,res){
	res.render("index");
});

 app.listen(3000);