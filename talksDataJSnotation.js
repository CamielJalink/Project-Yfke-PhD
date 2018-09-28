var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/content");

// the same, for talks.
var talksSchema = new mongoose.Schema({
	type: String,
	event: String,
	shortName: String,
	eventURL: String,
	location: String,
	date: String,
	dateInt: Number,
	title: String
});

var Talk = mongoose.model("Talk", talksSchema);



var talkPush = new Talk({
	type: "",
	event: "",
	shortName: "",
	eventURL: "",
	location: "",
	date: "",
	dateInt: 20160317,
	title: "",
});


talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})