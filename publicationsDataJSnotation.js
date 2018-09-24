var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/content");

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


// The script below can be used to insert the first 4 publications into the correct database.
// CAREFULL: these are already in the current database!

// var publicationPush = new Publication({
// 	type: "Conference Proceedings",
// 	title: "Quantum homomorphic encryption for polynomial-sized circuits",
// 	authors: "Yfke Dulek, Christian Schaffner, Florian Speelman",
// 	publishedIn: "Advances in Cryptology -- CRYPTO 2016 (pp. 3-32). Lecture Notes in Computer Science, Vol. 9816. Springer, Berlin, Heidelberg.",
// 	linkToArticle: "https://link.springer.com/chapter/10.1007/978-3-662-53015-3_1",
// 	linkToArXiv: "https://arxiv.org/pdf/1603.09717.pdf",
// 	doi: "10.1007/978-3-662-53015-3_1",
// 	abstract: "We present a new scheme for quantum homomorphic encryption which is compact and allows for efficient evaluation of arbitrary polynomial-sized quantum circuits. Building on the framework of Broadbent and Jeffery [BJ15] and recent results in the area of instantaneous non-local quantum computation [Spe15], we show how to construct quantum gadgets that allow perfect correction of the errors which occur during the homomorphic evaluation of T gates on encrypted quantum data. Our scheme can be based on any classical (leveled) fully homomorphic encryption (FHE) scheme and requires no computational assumptions besides those already used by the classical scheme. The size of our quantum gadget depends on the space complexity of the classical decryption function – which aligns well with the current efforts to minimize the complexity of the decryption function."
// });

// publicationPush.save(function(err, publication){
// 	if(err){
// 		console.log("An error occured while trying to save your publication to the db");
// 	} else{
// 		console.log("publication saved to database");
// 	}
// })

// publicationPush = new Publication({
// 	type: "Conference Proceedings",
// 	title: "Quantum fully homomorphic encryption with verification",
// 	authors: "Gorjan Alagic, Yfke Dulek, Christian Schaffner, Florian Speelman",	
// 	publishedIn: "Advances in Cryptology -- ASIACRYPT 2017 (pp. 438-467). Lecture Notes in Computer Science, Vol. 10624. Springer, Cham.",
// 	linkToArticle: "https://link.springer.com/chapter/10.1007/978-3-319-70694-8_16",
// 	linkToArXiv: "https://arxiv.org/pdf/1708.09156.pdf",
// 	doi: "10.1007/978-3-319-70694-8_16",
// 	abstract: "Fully-homomorphic encryption (FHE) enables computation on encrypted data while maintaining secrecy. Recent research has shown that such schemes exist even for quantum computation. Given the numerous applications of classical FHE (zero-knowledge proofs, secure two-party computation, obfuscation, etc.) it is reasonable to hope that quantum FHE (or QFHE) will lead to many new results in the quantum setting. However, a crucial ingredient in almost all applications of FHE is circuit verification. Classically, verification is performed by checking a transcript of the homomorphic computation. Quantumly, this strategy is impossible due to no-cloning. This leads to an important open question: can quantum computations be delegated and verified in a non-interactive manner? In this work, we answer this question in the affirmative, by constructing a scheme for QFHE with verification (vQFHE). Our scheme provides authenticated encryption, and enables arbitrary polynomial-time quantum computations without the need of interaction between client and server. Verification is almost entirely classical; for computations that start and end with classical states, it is completely classical. As a first application, we show how to construct quantum one-time programs from classical one-time programs and vQFHE.",
// });

// publicationPush.save(function(err, publication){
// 	if(err){
// 		console.log("An error occured while trying to save your publication to the db");
// 	} else{
// 		console.log("publication saved to database");
// 	}
// })

// publicationPush = new Publication({
// 	type: "Conference Proceedings",
// 	title: "Quantum ciphertext authentication and key recycling with the trap code",
// 	authors: "Yfke Dulek, Florian Speelman",
// 	publishedIn: "Proceedings of the 13th Conference on Theory of Quantum Computation, Communication and Cryptography -- TQC 2018 (pp. 1:1-1:17). Leibniz International Proceedings in Informatics, Vol. 111.",
//   linkToArticle: "http://drops.dagstuhl.de/opus/frontdoor.php?source_opus=9248",
//   linkToArXiv: "https://arxiv.org/pdf/1804.02237.pdf",
//   doi: "10.4230/LIPIcs.TQC.2018.1",
//   abstract: "We investigate quantum authentication schemes constructed from quantum error-correcting codes. We show that if the code has a property called purity testing, then the resulting authentication scheme guarantees the integrity of ciphertexts, not just plaintexts. On top of that, if the code is strong purity testing, the authentication scheme also allows the encryption key to be recycled, partially even if the authentication rejects. Such a strong notion of authentication is useful in a setting where multiple ciphertexts can be present simultaneously, such as in interactive or delegated quantum computation. With these settings in mind, we give an explicit code (based on the trap code) that is strong purity testing but, contrary to other known strong-purity-testing codes, allows for natural computation on ciphertexts."
// });

// publicationPush.save(function(err, publication){
// 	if(err){
// 		console.log("An error occured while trying to save your publication to the db");
// 	} else{
// 		console.log("publication saved to database");
// 	}
// })

// publicationPush = new Publication({
// 	type: "Journal Articles",
//   title: "Quantum homomorphic encryption for polynomial-size circuits",
//   authors: "Yfke Dulek, Christian Schaffner, Florian Speelman",
//   publishedIn: "theory of Computing 14.1 (2018): 1-45.",
//   linkToArticle: "https://theoryofcomputing.org/articles/v014a007/",
//   linkToArXiv: "https://arxiv.org/pdf/1603.09717.pdf",
//   doi:	"10.4086/toc.2018.v014a007",
//   abstract: "We present a new scheme for quantum homomorphic encryption which is compact and allows for efficient evaluation of arbitrary quantum circuits, as long as those circuits are of size, polynomial in the security parameter. Building on the framework of Broadbent and Jeffery (CRYPTO'15) and recent results in the area of instantaneous non-local quantum computation by Speelman (TQC'16), we show how to construct quantum gadgets that allow perfect correction of the errors which occur during the homomorphic evaluation of T gates on encrypted quantum data. Our scheme can be based on any classical (leveled) fully homomorphic encryption (FHE) scheme and requires no computational assumptions besides those already used by the classical scheme. The size of our quantum gadget depends on the space complexity of the classical decryption function -- which aligns well with the current efforts to minimize the complexity of the decryption function. Our scheme (or slight variants of it) offers a number of additional advantages such as ideal compactness, the ability to supply gadgets “on demand,” circuit privacy for the evaluator against passive adversaries, and a three-round scheme for blind delegated quantum computation which puts only very limited demands on the quantum abilities of the client."
// });

// publicationPush.save(function(err, publication){
// 	if(err){
// 		console.log("An error occured while trying to save your publication to the db");
// 	} else{
// 		console.log("publication saved to database");
// 	}
// })


var publicationPush = new Publication({
	type: "Conference Proceedings",
	title: "TestCAMIEL",
	authors: "Yfke Dulek, Christian Schaffner, Florian Speelman",
	publishedIn: "Advances in Cryptology -- CRYPTO 2016 (pp. 3-32). Lecture Notes in Computer Science, Vol. 9816. Springer, Berlin, Heidelberg.",
	linkToArXiv: "https://arxiv.org/pdf/1603.09717.pdf",
	doi: "10.1007/978-3-662-53015-3_1",
	abstract: "We present a new scheme for quantum homomorphic encryption which is compact and allows for efficient evaluation of arbitrary polynomial-sized quantum circuits. Building on the framework of Broadbent and Jeffery [BJ15] and recent results in the area of instantaneous non-local quantum computation [Spe15], we show how to construct quantum gadgets that allow perfect correction of the errors which occur during the homomorphic evaluation of T gates on encrypted quantum data. Our scheme can be based on any classical (leveled) fully homomorphic encryption (FHE) scheme and requires no computational assumptions besides those already used by the classical scheme. The size of our quantum gadget depends on the space complexity of the classical decryption function – which aligns well with the current efforts to minimize the complexity of the decryption function."
});

publicationPush.save(function(err, publication){
	if(err){
		console.log("An error occured while trying to save your publication to the db");
	} else{
		console.log("publication saved to database");
	}
})


