// dom-basics.js

// Activity 2 - Step 1: Adding a basic paragraph
// This code was part of the earlier activity to demonstrate
// createElement, innerText, and appendChild.
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Activity 2 - Step 2: Adding an image
// This code demonstrates creating an image element and setting its attributes.
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

// Activity 2 - Step 3: Adding complex HTML using innerHTML
// This shows how to inject a full HTML string into an element.
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Activity 2 - Step 4: Your turn! Create a new section with an h2 and a paragraph.
// This section demonstrates creating a new <section> element,
// adding an <h2> and a <p> to it, and then appending the entire section
// to the document body.

// Option 1: Create elements individually and append them
const newSectionIndividual = document.createElement("section");

const newH2Individual = document.createElement("h2");
newH2Individual.innerText = "DOM Basics"; // Set the text content for the h2
newSectionIndividual.appendChild(newH2Individual); // Add the h2 to the new section

const newPIndividual = document.createElement("p");
newPIndividual.innerText = "This was added through Javascript (Individual Elements)"; // Set the text content for the paragraph
newSectionIndividual.appendChild(newPIndividual); // Add the paragraph to the new section

// Finally, append the entire new section to the body of the document.
document.body.appendChild(newSectionIndividual);


// Option 2 (Alternative): Create the section and set its innerHTML directly
// This is a more concise way if you have a block of HTML to insert.
const newSectionInnerHTML = document.createElement("section");
newSectionInnerHTML.innerHTML = `
  <h2>DOM Basics</h2>
  <p>This was added through Javascript (innerHTML method)</p>
`;
document.body.appendChild(newSectionInnerHTML);
