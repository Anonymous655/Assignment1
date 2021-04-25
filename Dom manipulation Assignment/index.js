// to show the whole DOM
// console.log(document);

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



// task 4

const ulList = document.getElementById('items');
ulList.parentElement.style.border = '1px solid black';
ulList.lastElementChild.style.color = 'yellow';
// ulList.lastChild.style.border = '1x solid black'; note: It returns the text node
ulList.firstElementChild.style.color = 'red';
//  firstchild returns the text node
// nextSibling also returns the text node
// previousSibling also returns text node
ulList.previousElementSibling.style.color  = 'green'


let textNode = document.createTextNode('Hello world');
let newdiv = document.createElement('div');
newdiv.appendChild(textNode);
const container = document.querySelector('header .container');
const headerTitle = document.querySelector('header h1');
console.log(newdiv);
container.insertBefore(newdiv, headerTitle);


const textNode2 = document.createTextNode("Hello World")
const newList = document.createElement('li');
newList.appendChild(textNode2);
newList.setAttribute('class', 'newlist');
let item1 = document.querySelector('ul #first')
ulList.insertBefore(newList, item1)
console.log(newList)
let newlist = document.getElementsByClassName('newlist');
newlist[0].style.fontWeight = 'bold'
newlist[0].style.paddingLeft = '15px'
newlist[0].style.listStyle = 'none'
newlist[0].style.padding = '15px'





