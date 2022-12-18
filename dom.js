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


