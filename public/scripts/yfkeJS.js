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

if(!!emailLocation){
	var address = "dulek";
	address = address + "@cwi.nl";
	var mailToAddress = "mailto:" + address;
	
	var mailAnchor = document.createElement("a");
	mailAnchor.setAttribute("href", mailToAddress);
	mailAnchor.textContent = address;
	
	emailLocation.appendChild(mailAnchor);
}









// Some 'hidden' code, if you catch my drift.

var hiddenPassword1 = "m8Ri3";
var hiddenPassword2 = "JGVGLBSL";
var hiddenAnswer1 = "Hoi Dr. D! Het is je gelukt om de eerste code te vinden! Gewapend met deze code heb ik een bericht naar het verleden weten te sturen in een poging om de dynamiek tussen jou en Alvero te veranderen zodat hij nooit voor zichzelf zal beginnen. Echter, het lijkt erop dat dit bericht nog niet genoeg was. We zullen een extra temporele code nodig hebben om het nog eens te proberen. Met de tijdmachine hier weet ik dat de volgende temporele code zal opdoen in het weekend van mei op juni, maar helaas wel helemaal in Fontaine Bleau! Succes Dr. Dulek, ik geloof in je!   -Claire";
var hiddenAnswer2 = "Hi Dr. D! De tweede temporele code is goed aangekomen en leek het gewenste effect te bereiken: Alvero de Wrede is nooit voor zichzelf begonnen en heeft jou zelfs geholpen bij het ontwikkelen van je tijdsmachine! Helaas is tot mijn grote spijt de tijdslijn op een andere manier verstoord die ik niet had voorzien: Dr. Tom heeft in een hard-om-hard potje D&D het eigenaarsschap van de tijdmachines van Alvero gewonnen! In plaats van een wreed regime heeft Tom zijn tijdmachines gebruikt om vrouwen-mode te manipuleren zodat iedereen alleen nog maar veel te korte rokjes draagt, het is vreselijk! Help ons Dr. D! De volgende temporele code zal zich eind juni begin juli voordoen, en wel in de Apenheul!";
var hiddenButton = document.querySelector("#hiddenButton");

if(!!hiddenButton){
	hiddenButton.addEventListener("click", checkPassword);
}


function checkPassword(){
	var input = document.querySelector("#hiddenInput").value;
	var hiddenAnswerDiv = document.querySelector("#hiddenAnswerDiv");
	
	if(input == hiddenPassword1){
		hiddenAnswerDiv.classList.remove("hideAnswerDiv");
		document.querySelector("#hiddenAnswerText").innerHTML = hiddenAnswer1;
	} else if (input == hiddenPassword2){
		hiddenAnswerDiv.classList.remove("hideAnswerDiv");
		document.querySelector("#hiddenAnswerText").innerHTML = hiddenAnswer2;
	} else{
		hiddenAnswerDiv.classList.add("hideAnswerDiv");
	}
}