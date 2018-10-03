var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.use('/styles/', express.static('public/css'));
app.use('/images/', express.static('public/images'));
app.use('/scripts/', express.static('public/scripts'));
app.use('/fontawesome/', express.static('node_modules/@fortawesome/fontawesome-free'));


// This line tells express to expect views to be .ejs files.
app.set("view engine", "ejs");

// Connects to the 'content' database which will have different collections, such as 'publications', 'talks', 'teaching' etc.
mongoose.connect("mongodb://localhost/content");

// The publication schema, for the publication collection in the content database.
var publicationSchema = new mongoose.Schema({
	type: String, 
	title: String, 
	authors: String,
	publishedIn: String, 
	linkToArticle: String,
	linkToArXiv: String,
	doi: String,
	abstract: String,
	year: Number
});

var Publication = mongoose.model("Publication", publicationSchema);



// the same, for talks.
var talksSchema = new mongoose.Schema({
	type: String,
	event: String,
	shortName: String,
	eventURL: String,
	location: String,
	date: String,
	dateInt: Number,
	title: String,
	videoURL: String
});

var Talk = mongoose.model("Talk", talksSchema);




// Root Route
app.get("/", function(req, res){
	res.render("home");
})


// Publications route, that retrieves publications from the db.
app.get("/publications", function(req, res){
	
	Publication.find().sort({year: "descending"}).exec(function(err, publications){
		if(err){
			console.log("There was an error attempting to retrieve publications from the db.");
		} else{
			res.render("publications", {publications: publications});
		}
	})
})


// Talks route, that retrieves publications from the db. 
app.get("/talks", function(req,res){
	
	Talk.find().sort({dateInt: "descending"}).exec(function(err, talks){
		if(err){
			console.log("There was an error attempting to retrieve talks from the db");
		} else{
			console.log("Talks succesfully extracted from db");
			res.render("talks", {talks: talks});
		}
	})
})


// Teaching route
app.get("/teaching", function(req,res){
	
	res.render("teaching");
})


app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is running");
})