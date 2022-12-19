// // //Examine the Document Object
// // console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // document.title = "Grocery Shop";
// // console.log(document.title);
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // // document.all[10].textContent = "Grocery Shop";
// // console.log(document.forms);
// // console.log(document.links);
// // console.log(document.images);

// // //GET Elements by Id

// // console.log(document.getElementById("header-title"));
// // let a = document.getElementById('header-title');
// // let b = document.getElementById('main-header');
// // console.log(a);
// // a.textContent = 'Grocery Shop';
// // a.innerText = "Fruit Shop";
// // //textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. 
// // a.innerHTML = '<h3>Online Shop</h3>';
// // //It is inside the <h1> element.
// // b.style.borderBottom  = "solid 2px black";

// // let addItems = document.getElementById('add-Items');
// // console.log(addItems);
// // addItems.style.fontWeight = "900";
// // addItems.style.color = "Green";

// // //Get Element by the Class Name

// // let item3 = document.getElementsByClassName('list-group-item')[2];
// // console.log(item3);
// // item3.style.background = "Green";

// // let allList = document.getElementsByClassName('list-group-item');
// // console.log(allList);
// // for(let i = 0; i<allList.length; i++){
// //     allList[i].style.fontWeight = "900";
// // }


// // //Get Element by tag name

// // let li = document.getElementsByTagName('li');
// // console.log(li);

// // // li[4].style.listStyle = "none";

// // for (let i = 0; i<li.length; i++){
// //     li[i].style.color = "darkgrey"
// // }


// // //Query Sellector 
// // let header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 4px black';

// // let input = document.querySelector('input');
// // input.value = "Type Here";

// // let submit = document.querySelector('input[type = "submit"]');
// // submit.value = "Add";

// // let secondItem  = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.background = "green";

// // let hiddenEle = document.querySelector('.list-group-item:nth-child(3)');
// // // hiddenEle.setAttribute("hidden", true);
// // hiddenEle.style.visibility = "hidden";


// // //Query Selector All

// // let titles = document.querySelectorAll('.title')
// // titles[0].textContent = "Add to Cart";

// // let secondEle = document.querySelectorAll('.list-group-item:nth-child(2)');
// // console.log(secondEle);
// // secondEle[0].style.color = 'green';

// // //doing even instead of odd because one odd element is already hidden.
// // let even = document.querySelectorAll('li:nth-child(even)');

// // for(let i = 0; i< even.length; i++){
// //     even[i].style.background = "black";
// // }



// // Transversing The DOM

// let itemList = document.querySelector('#items');

// //Parent Node

// // console.log(itemList.parentNode);
// // itemList.parentNode.style.background = "lightgrey";
// // console.log(itemList.parentNode.parentNode);
// // console.log(itemList.parentNode.parentNode.parentNode);


// //Parent Element

// console.log(itemList.parentElement);
// itemList.parentElement.style.background = "lightgrey";
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);


// //Child Node

// console.log(itemList.childNodes);
// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.background = "yellow";

// //First & Last child Node & Element

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Laptop";

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Books";

// //Next Sibling

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// //Previous Sibling

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = "green";

// //Create Element

// let newDiv = document.createElement('div');
// newDiv.className = 'newDiv';
// newDiv.id = 'newDiv-id';
// newDiv.setAttribute('title', 'Hello Div');
// let newDivText = document.createTextNode('Creating a New Div By Js');
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);
// // console.log(newDiv);

// newDiv.style.fontStyle = "italic";

// let newDiv1 = document.createElement('div');
// newDiv1.className = "newDiv1";
// newDiv1.id = "newDiv1-id";
// let newDiv1Text = document.createTextNode('Creating another element using js');
// newDiv1.appendChild(newDiv1Text);
// // console.log(newDiv1);

// let con = document.querySelector('ul');
// let aboveItems = document.querySelector('ul li');
// con.insertBefore(newDiv1, aboveItems);

// newDiv1.style.fontStyle = "italic";





//Task 8

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//Function addItem

const addItem = (e) => {
    e.preventDefault();
    
    //Get Input Value
    let newItem = document.getElementById('item').value;
    console.log(newItem);
    
    //Create new Element
    let li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    //Create Delete button
    let delButton = document.createElement('button');

    //Add Classes to del button
    delButton.className = 'btn btn-danger btn-sm float-right delete';

    //Append Text Node
    delButton.appendChild(document.createTextNode('x'));

    //Append Button to Li
    li.appendChild(delButton);

    //Append li to List
    itemList.appendChild(li);

    //Create an Edit Button
    let editButton = document.createElement('button');
    
    //Add Classes to edit Button
    editButton.className = 'btn btn-secondary float-right btn-sm col-2 mx-2';

    //Append Text Node
    editButton.appendChild(document.createTextNode('Edit'));

    //Append button to Li
    li.appendChild(editButton);

}

//Remove Item
const removeItem = (e) => {
  if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click' , removeItem);




