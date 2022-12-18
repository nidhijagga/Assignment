//Examine the Document Object
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "Grocery Shop";
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent = "Grocery Shop";
console.log(document.forms);
console.log(document.links);
console.log(document.images);

//GET Elements by Id

console.log(document.getElementById("header-title"));
let a = document.getElementById('header-title');
let b = document.getElementById('main-header');
console.log(a);
a.textContent = 'Grocery Shop';
a.innerText = "Fruit Shop";
//textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. 
a.innerHTML = '<h3>Online Shop</h3>';
//It is inside the <h1> element.
b.style.borderBottom  = "solid 2px black";

let addItems = document.getElementById('add-Items');
console.log(addItems);
addItems.style.fontWeight = "900";
addItems.style.color = "Green";

//Get Element by the Class Name

let item3 = document.getElementsByClassName('list-group-item')[2];
console.log(item3);
item3.style.background = "Green";

let allList = document.getElementsByClassName('list-group-item');
console.log(allList);
for(let i = 0; i<allList.length; i++){
    allList[i].style.fontWeight = "900";
}


//Get Element by tag name

let li = document.getElementsByTagName('li');
console.log(li);

// li[4].style.listStyle = "none";

for (let i = 0; i<li.length; i++){
    li[i].style.color = "darkgrey"
}


//Query Sellector 
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

let input = document.querySelector('input');
input.value = "Type Here";

let submit = document.querySelector('input[type = "submit"]');
submit.value = "Add";

let secondItem  = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.background = "green";

let hiddenEle = document.querySelector('.list-group-item:nth-child(3)');
// hiddenEle.setAttribute("hidden", true);
hiddenEle.style.visibility = "hidden";


//Query Selector All

let titles = document.querySelectorAll('.title')
titles[0].textContent = "Add to Cart";

let secondEle = document.querySelectorAll('.list-group-item:nth-child(2)');
console.log(secondEle);
secondEle[0].style.color = 'green';

//doing even instead of odd because one odd element is already hidden.
let even = document.querySelectorAll('li:nth-child(even)');

for(let i = 0; i< even.length; i++){
    even[i].style.background = "black";
}







