var mongoose = require("mongoose");
mongoose.connect(process.env.DATABASEURL);

var teachingSchema = new mongoose.Schema({
  course: String,
  level: String,
  institution: String,
  semester: String,
  role: String,
  description: String,
  dateInt: Number
})

var Teaching = mongoose.model("Teaching", teachingSchema);


// teaching data starts here for creating the new collection on the mongoDB. 
var teachingPush = new Teaching({
  institution: "Utrecht University",
  course: "Introduction to Logic",
  level: "BSc, year 1",
  role: "TA",
  semester: "Fall 2010",
  description: "An introduction to mathematical logic including semantic tableaux and natural deduction for propositional and first-order predicate logic. As a TA, I guided one of three work sessions and graded homework assingments.",
  dateInt: 20100901
})

teachingPush.save(function(err, teaching){
	if(err){
		console.log("An error occured while trying to save your teaching-data to the db");
	} else{
		console.log("teaching data saved to database");
	}
})

var teachingPush = new Teaching({
  institution: "Utrecht University",
  course: "Natural Language Processing",
  level: "BSc, year 2",
  role: "TA",
  semester: "Fall 2011",
  description: "How to determine the syntactic and semantic properties of a sentence, using lambda calculus, natural deduction, and proof nets. As a TA, I guided one of two work sessions and graded homework assignments.",
  dateInt: 20110901
})

teachingPush.save(function(err, teaching){
	if(err){
		console.log("An error occured while trying to save your teaching-data to the db");
	} else{
		console.log("teaching data saved to database");
	}
})

var teachingPush = new Teaching({
  institution: "Utrecht University",
  course: "Logical Complexity",
  level: "BSc, year 3",
  role: "TA",
  semester: "Spring 2012",
  description: "An introduction to computational complexity theory, with a strong focus on automata theory. As a TA, I guided the work session.",
  dateInt: 20120201
})

teachingPush.save(function(err, teaching){
	if(err){
		console.log("An error occured while trying to save your teaching-data to the db");
	} else{
		console.log("teaching data saved to database");
	}
})

var teachingPush = new Teaching({
  institution: "Utrecht University",
  course: "Mathematics for AI",
  level: "BSc, year 1",
  role: "TA",
  semester: "Fall 2012",
  description: "An introductory course on set theory and linear algebra. As a TA, I guided one of three work sessions and graded homework assignments.",
  dateInt: 20120901
})

teachingPush.save(function(err, teaching){
	if(err){
		console.log("An error occured while trying to save your teaching-data to the db");
	} else{
		console.log("teaching data saved to database");
	}
})

var teachingPush = new Teaching({
  institution: "University of Amsterdam",
  course: "Information Theory",
  level: "MSc",
  role: "TA",
  semester: "Fall 2016, Fall 2017, Fall 2018",
  description: "An overview of classical information theory starting from the definition of entropy up until Shannon's noisy-channel coding theorem. Topic range from encryption and error-correction to data compression. As a TA, I wrote most of the lecture notes, designed and graded homework assignments and final exams, and guided work sessions. We saw the course grow from just 30 students in 2016 to 120 students in 2018. In that year, I helped redesign the course into a flipped-classroom style course with elements of team-based learning.",
  dateInt: 20180901
})

teachingPush.save(function(err, teaching){
	if(err){
		console.log("An error occured while trying to save your teaching-data to the db");
	} else{
		console.log("teaching data saved to database");
	}
})

var teachingPush = new Teaching({
  institution: "University of Amsterdam",
  course: "Quantum Cryptography (project)",
  level: "MSc",
  role: "TA",
  semester: "Summer 2017, Summer 2018",
  description: "A mini-course on quantum cryptography, based on the edX course designed by TU Delft. As a TA, I guided some of the discussion sessions (approx. 5 students) and graded homework assignments.",
  dateInt: 20180601
})

teachingPush.save(function(err, teaching){
	if(err){
		console.log("An error occured while trying to save your teaching-data to the db");
	} else{
		console.log("teaching data saved to database");
	}
})