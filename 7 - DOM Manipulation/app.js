// DOM - Document Object Model
// document = the html file
// object = the html elements
// object - have properties and methods
// properties = the attributes of the html elements
// methods = the actions of the html elements
// model = the structure of the html elements

// access element using id by using getElementById
let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);

elementWithID.textContent = "This is the first div";
// this will change the text content of the element with id first-div



// access element using class by using getElementsByClassName
let elementWithClass = document.getElementsByClassName("second-div");
console.log("Element accessed using class:", elementWithClass);
// access element using tag by using getElementsByTagName
let elementWithTag = document.getElementsByTagName("div");
console.log("Element accessed using tag:", elementWithTag);
// access element using querySelector
let elementWithQuerySelector = document.querySelector(".second-div");
console.log("Element accessed using querySelector:", elementWithQuerySelector);
// access element using querySelectorAll
let elementWithQuerySelectorAll = document.querySelectorAll(".second-div");
console.log("Element accessed using querySelectorAll:", elementWithQuerySelectorAll);

// Create element
let newElement = document.createElement("div");
newElement.textContent = "This is a new div";
document.body.appendChild(newElement);

// Append element
let elementToBeAppended = document.querySelector("#element-to-be-appended");
let newElementToBeAppended = document.createElement("div");
newElementToBeAppended.textContent = "This is a new div to be appended";

elementToBeAppended.appendChild(newElementToBeAppended);

// Insert element
let elementToBeInserted = document.querySelector("#element-to-be-inserted");
let newElementToBeInserted = document.createElement("div");
newElementToBeInserted.textContent = "This is a new div to be inserted";

elementToBeInserted.insertBefore(newElementToBeInserted, elementToBeInserted.firstChild);

// .querySelector()
// Returns the first element
let orderedListItem = document.querySelector(".ordered-list")
console.log("Ordered List Items:", orderedListItem);
// kebab-case
// camelCase
// variableWithFourWords
orderedListItem.style.backgroundColor = "lightgreen";

// .querySelectorAll()
// Return a NodeList
let headings = document.querySelectorAll("h3");
console.log("Heading Tags:", headings);
headings[0].style.backgroundColor = "aqua";

// Replace element
let elementToBeReplaced = document.querySelector("#element-to-be-replaced");
let newElementToBeReplaced = document.createElement("div");
newElementToBeReplaced.textContent = "This is a new div to replace the old div";

let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// Remove element
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.querySelector('#dark-mode-btn');
darkModeBtn.addEventListener('click', function () {
  let pageContainer = document.querySelector('#page-container');
  pageContainer.style.backgroundColor = 'black';
  pageContainer.style.color = 'white';
  let pageModeText = document.querySelector('#page-mode-text');
  pageModeText.textContent = 'Dark Mode';
});