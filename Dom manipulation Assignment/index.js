// to show the whole DOM
console.log(document);

// innerText returns the visible text contained in a node, while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello', while textContent will return 'Hello World'.

const header = document.getElementById("main-header");
const addItems = document.getElementById("title");

header.style.border = "solid 3px black";
addItems.style.fontWeight = "bold";
addItems.style.color = "green";

// task 2
const items = document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor = 'green';

for(i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}

// task 3
const newItem = document.getElementsByClassName("new-item");
const newItemTag = document.getElementsByTagName('li');
newItemTag[4].style.backgroundColor = 'red';
// console.log(newItem);

newItem[0].style.color = 'black';
newItem[0].style.fontWeight = 'bold';
newItem[0].style.listStyle = 'none';


newItemTag[4].style.paddingLeft = '15px';
newItemTag[4].style.padding = '15px';
