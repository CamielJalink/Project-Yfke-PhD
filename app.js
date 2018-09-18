var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.use('/styles/', express.static('public/css'));
app.use('/images/', express.static('public/images'));
app.use('/scripts/', express.static('public/scripts'));

// This line tells express to expect views to be .ejs files. 
app.set("view engine", "ejs");

// Connects to the 'content' database which will have different collections, such as 'publications', 'talks', 'teaching' etc. 
mongoose.connect("mongodb://localhost/content");



// lees database in en maak objects aan


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
//      type: "Conference Proceedings",
//      ....etc.
//   })


app.get("/", function(req, res){
	res.render("index");
})


// Publications subpage that first requests all publications from the database. 
app.get("/publications", function(req, res){
	
	var publicationsList = [
		{
		type: "Publications", 
		title: "Yfke and Mario save the world", 
		authors: "Yfke, Camiel",
		publishedIn: "Nintendo magazine", 
		linkToArticle: "https://www.google.com/",
		linkToArXiv: "https://www.google.com/",
		doi: "https://www.google.com/", 
		abstract: "One day Mario said 'Fuck it, I need help' and then went to get Yfke, and they killed Bowser good, the end."
		},
		
		{
		type: "Not a real publication",
		title: "Yfke and Mario save the world, Part 2",
		authors: "Yfke, Camiel",
		publishedIn: "Nintendo magazine", 
		linkToArticle: "https://www.google.com/",
		linkToArXiv: "https://www.google.com/",
		doi: "https://www.google.com/",
		abstract: "One day Mario said 'Fuck it, I need help' and then went to get Yfke, and they killed Bowser good, the end."
		}
	]
	
	res.render("publications", {publicationsList: publicationsList});
})

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is running");
})

