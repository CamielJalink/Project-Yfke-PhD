var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.use('/styles/', express.static('public/css'));
app.use('/images/', express.static('public/images'));
app.use('/scripts/', express.static('public/scripts'));

// Connects to the 'content' database which will have different collections, such as 'publications', 'talks', 'teaching' etc. 
mongoose.connect("mongodb://localhost/content");

// 
var publicationSchema = new mongoose.Schema({
	type: String, 
	title: String, 
	authors: String,
	publishedIn: String, 
	linkToArticle: String,
	linkToArXiv: String,
	doi: String, 
	abstract: String
});

var Publication = mongoose.model("Publication", publicationSchema);


// De text hieronder is een voorbeeld voor hoe ik dit later aanpakken kan. 

//   var publication1ofzo = new Publication({
//      type: "Conference Proceedings"
//      ....etc.
//   })




app.get("/", function(req, res){
	res.render("index.ejs");
})

app.get("/publications", function(req, res){
	res.render("publications.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is running");
})