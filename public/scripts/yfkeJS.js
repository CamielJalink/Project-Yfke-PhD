// Code to change the colors on the navbar to show which subpage you are on.
var allNavbarLinks = document.querySelectorAll(".navbar-link");

for(var i = 0; i < allNavbarLinks.length; i++){
	
	if(allNavbarLinks[i].href == window.location.href){

		// This is not seperation of concerns.
		// Adding a class won't do the trick however, because the css and html for this page have already loaded.
		// Until i find a better solution than this, i will abuse javascript to change the two styles.
		allNavbarLinks[i].style.background = "white";
		allNavbarLinks[i].style.color = "steelblue";
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
var emailButton = document.querySelector("#emailButton");
var emailLocation = document.querySelector("#emailLocation");

emailButton.addEventListener("click", emailClicked);

function emailClicked(){
	var address = "yfkedulek";
	address = address + "@cwi.nl";
	var mailToAddress = "mailto:" + address;
	
	var mailAnchor = document.createElement("a");
	mailAnchor.setAttribute("href", mailToAddress);
	mailAnchor.textContent = address;
	
	emailLocation.appendChild(mailAnchor);
}