// to show the whole DOM
console.log(document);

// innerText returns the visible text contained in a node, while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello', while textContent will return 'Hello World'.

const header = document.getElementById("main-header");
const addItems = document.getElementById("title");

header.style.border = "solid 3px black";
addItems.style.fontWeight = "bold";
addItems.style.color = "green";
