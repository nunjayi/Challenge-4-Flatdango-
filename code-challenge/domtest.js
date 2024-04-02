
var div = document.createElement('div');
div.appendChild(document.createTextNode('top div'));

div.appendChild('h1');
// Get the parent element
const parent = document.getElementsByTagName('div')
console.log(parent)

// Create the child elements
const children = [];
for (let i = 0; i < 5; i++) {
  const child = document.createElement('p');
  child.textContent = `Child ${i + 1}`;
  children.push(child);
}
console.log(children)

// Append the child elements to the parent element
for (let i = 0; i < children.length-1; i++) {
  parent.appendChild(children[i]);
}