// Code to change the colors on the navbar to show which subpage you are on.
var allNavbarLinks = document.querySelectorAll(".navbar-link");

for(var i = 0; i < allNavbarLinks.length; i++){
	
	if(allNavbarLinks[i].href == window.location.href){
		allNavbarLinks[i].classList.add("navbar-link-selected");
	}
}



// Document objects for the abstract functionality
var allAbstracts = document.querySelectorAll(".abstract");
var allAbstractIcons = document.querySelectorAll(".abstractIcon");
var allAbstractTexts = document.querySelectorAll(".abstractTextHidden");

// Code linking abstract icon and abstract test-button together. 
for(var i = 0; i < allAbstracts.length; i++){
	allAbstracts[i].abstractNumber = i;
	allAbstracts[i].addEventListener("click", abstractClicked);
}


// Abstract eventhandler for showing and hiding the abstracts.
function abstractClicked(){
	var icon = allAbstractIcons[this.abstractNumber];
	var text = allAbstractTexts[this.abstractNumber];

  icon.classList.toggle("fa-angle-right");
	icon.classList.toggle("fa-angle-down");
	text.classList.toggle("abstractTextHidden");
	text.classList.toggle("abstractTextVisible");
}



// The following script handles the inserting of Yfke's email adress after rendering the page.
var emailLocation = document.querySelector("#emailLocation");

var address = "dulek";
address = address + "@cwi.nl";
var mailToAddress = "mailto:" + address;

var mailAnchor = document.createElement("a");
mailAnchor.setAttribute("href", mailToAddress);
mailAnchor.textContent = address;

emailLocation.appendChild(mailAnchor);







// Some 'hidden' code, if you catch my drift.

var hiddenPassword1 = "m8Ri3";


// Click handler nodig voor alle knoppen, dus als meerdere op deze pagina doe ze dan gelijk allemaal
// document.getElementById('textbox_id').value    <-- zoiets kan ik gebruiken om bij de waarde te komen. 
// Als die waarde klopt volgens hiddenPassword1 hierboven, 
// 

// Vervolgens wil ik een class toevoegen of verwijderen van de daadwerkelijke HINT text ofzo.
// Dat kan ik doen door die <p> of whatever eerst met een querySelector op te vragen, 
// En vervolgens daar classes op te zetten oid:
// // function reset(){
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors"
// 	messageDisplay.textContent = "";
// 	//change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.display = "block"
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// }

// Voorbeeld clickeventhandlers:
		// modeButtons[i].addEventListener("click", function(){
		// 	modeButtons[0].classList.remove("selected");
		// 	modeButtons[1].classList.remove("selected");
		// 	this.classList.add("selected");
		// 	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		// 	reset();    <-- dit verwijst naar een reset method in de colorGame, niet naar iets dat ik hier ook moet doen
		// });
	