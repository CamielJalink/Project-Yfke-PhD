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
	title: String,
	videoURL: String 
});

var Talk = mongoose.model("Talk", talksSchema);


var talkPush = new Talk({
 type: "conference talks",
 event: "13th Conference on the Theory of Quantum Computation, Communication and Cryptography",
 shortName: "TQC2018",
 eventURL: "https://www.tqc2018.org/",
 location: "Sydney, Australia",
 date: "July 18, 2018",
 dateInt: 20180718,
 title: "Quantum ciphertext authentication and key recycling with the trap code",
 videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "conference talks",
  event: "23rd International Conference on the Theory and Application of Cryptology and Information Security",
  shortName: "ASIACRYPT 2017",
  eventURL: "https://asiacrypt.iacr.org/2017/",
  location: "Hong Kong, China",
  date: "4 December 2017",
  dateInt: 20171204,
  title: "Quantum fully homomorphic encryption with verification",
  videoURL: "https://www.youtube.com/watch?v=c3OPExE6NSI"
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "conference talks",
  event: "7th International Conference on Quantum Cryptography",
  shortName: "QCrypt 2017",
  eventURL: "http://2017.qcrypt.net/",
  location: "Cambridge, United Kingdom",
  date: "18 September 2017",
  dateInt: 20170918,
  title: "Quantum fully homomorphic encryption with verification",
  videoURL: "https://www.youtube.com/watch?v=b0dQlnBGeD0"
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "conference talks",
  event: "6th International Conference on Quantum Cryptography",
  shortName: "QCrypt 2016",
  eventURL: "http://2016.qcrypt.net/",
  location: "Washington D.C., USA",
  date: "15 September 2016",
  dateInt: 20160915,
  title: "Quantum homomorphic encryption for polynomial-sized circuits",
  videoURL: "https://www.youtube.com/watch?v=nPYPbCz8KIw"
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "conference talks",
  event: "36th International Cryptology Conference",
  shortName: "CRYPTO 2016",
  eventURL: "https://www.iacr.org/conferences/crypto2016/",
  location: "Santa Barbara, CA, USA",
  date: "16 August 2016",
  dateInt: 20160816,
  title: "Quantum homomorphic encryption for polynomial-sized circuits",
  videoURL: "https://www.youtube.com/watch?v=0zRE9wBf1cc"
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "conference talks",
  event: "9th International Conference on Information Theoretic Security",
  shortName: "ICITS 2016",
  eventURL: "",
  location: "Tacoma, WA, USA",
  date: "10 August 2016",
  dateInt: 20160810,
  title: "Quantum homomorphic encryption for polynomial-sized circuits",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "invited talks",
  event: "Quantum Innovators in Computer Science and Mathematics 2018",
  shortName: "",
  eventURL: "",
  location: "Waterloo, Canada",
  date: "22 October 2018",
  dateInt: 20181022,
  title: "TBA",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "invited talks",
  event: "Quantum Information for Developers",
  shortName: "QuID 2018",
  eventURL: "https://qid.ethz.ch/",
  location: "Zurich, Switzerland",
  date: "11 September 2018",
  dateInt: 20180911,
  title: "Quantum networks and security",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "invited talks",
  event: "Dutch Mathematical Congress",
  shortName: "NMC 2018",
  eventURL: "",
  location: "Veldhoven, the Netherlands",
  date: "3 April 2018",
  dateInt: 20180403,
  title: "Quantum computing on authenticated data",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "invited talks",
  event: "McGill workshop on Secure Computation on Quantum Data",
  shortName: "",
  eventURL: "",
  location: "Bellairs Research Institute, Barbados",
  date: "1-2 March 2017",
  dateInt: 20170301,
  title: "Quantum homomorphic encryption for polynomial-sized circuits, part II",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "invited talks",
  event: "Symposium on Quantum Software in the Netherlands",
  shortName: "",
  eventURL: "",
  location: "Amsterdam, the Netherlands",
  date: "25 November 2016",
  dateInt: 20161125,
  title: "Computing on Encrypted Quantum Data",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "seminars and outreach",
  event: "QuSoft seminar",
  shortName: "",
  eventURL: "",
  location: "Amsterdam, the Netherlands",
  date: "18 May 2018",
  dateInt: 20180318,
  title: "Quantum ciphertext authentication and key recycling with the trap code",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "seminars and outreach",
  event: "(interview) Studeren= magazine",
  shortName: "",
  eventURL: "",
  location: "The Netherlands",
  date: "September 2017 issue",
  dateInt: 20170901,
  title: "A duo interview with Harry Buhrman and myself, for the exact-sciences section of a national magazine aimed at Dutch high-school students",
  videoURL: "http://jestudiestartnu.nl/duo-interview/"
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "seminars and outreach",
  event: "Paradisolezing 2017",
  shortName: "",
  eventURL: "",
  location: "Amsterdam, the Netherlands",
  date: "18 June 2017",
  dateInt: 20170618,
  title: "Harry Buhrman gave a lecture for a non-scientific audience, entitled 'Kunstmatige Intelligentie en quantumcomputers: nemen de computers het straks over?'. I assisted him by giving a short talk on the threat of quantum computers for cryptography, and by joining him for the question round.",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "seminars and outreach",
  event: "Building Blocks Dinner Lecture",
  shortName: "",
  eventURL: "",
  location: "Tilburg, the Netherlands",
  date: "24 November 2016",
  dateInt: 20161124,
  title: "Quantum homomorphic encryption",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "seminars and outreach",
  event: "(interview) DigiVita's Girls' Summer Camp",
  shortName: "",
  eventURL: "",
  location: "Amsterdam, the Netherlands",
  date: "18 July 2016",
  dateInt: 20160718,
  title: "30-minute question session by a group of 40 girls of age 10-15",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "seminars and outreach",
  event: "QMATH Quantum Lunch",
  shortName: "",
  eventURL: "",
  location: "Copenhagen, Denmark",
  date: "15 June 2016",
  dateInt: 20160615,
  title: "Quantum homomorphic encryption",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})
talkPush = new Talk({
  type: "seminars and outreach",
  event: "VIA CLASSIC",
  shortName: "",
  eventURL: "",
  location: "VIA study association, Amsterdam, the Netherlands",
  date: "30 March 2016",
  dateInt: 20160330,
  title: "Master of Logic / Quantum homomorphic encryption",
  videoURL: ""
});
talkPush.save(function(err, talk){
	if(err){
		console.log("An error occured while trying to save your talk to the db");
	} else{
		console.log("talk saved to database");
	}
})