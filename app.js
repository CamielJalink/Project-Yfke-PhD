var express = require("express");
var app = express();

app.use('/styles/', express.static('public/css'));
app.use('/images/', express.static('public/images'));
app.use('/scripts/', express.static('public/scripts'));

app.get("/", function(req, res){
		res.render("index.ejs");
})


app.listen(process.env.PORT, process.env.IP, function(){
		console.log("server is running");
})