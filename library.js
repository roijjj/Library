const myLibrary = [];
const container = document.getElementById("main")
let currnetbook = 0;


function Book(bid, name, auth,pages,read) {
  this.id = bid;
  this.title = name;
  this.author = auth;
  this.page = pages;
  this.hasrad = read;
}

function addBookToLibrary(name, auth, pages, read) {
const id = crypto.randomUUID()
const books = new Book(id, name, auth, pages, read);
console.log(id);
myLibrary.push(books);
  
}


function showbooks(){

let tab = document.createElement("table");
let tablehead = document.createElement("thead");
let tablebody = document.createElement("tbody");
let hrow= document.createElement("tr")
let title = document.createElement("th");
let author = document.createElement("th");
let page = document.createElement("th");
let read = document.createElement("th");
let buttons = document.createElement("th");



title.innerHTML = "Title";
author.innerHTML = "author";
page.innerHTML = "page number";
read.innerHTML = "read";
//buttons.innerHTML = "read";


hrow.appendChild(title);
hrow.appendChild(author);
hrow.appendChild(page);
hrow.appendChild(read);
//hrow.appendChild(buttons)
tablehead.appendChild(hrow);
tab.appendChild(tablehead);

let sortli = ()=> myLibrary.sort((myLibrary1, myLibrary2)=>{
  let title1 = myLibrary1.title;
  let title2 = myLibrary2.title;
  if(title1<title2){
    return 1; 
  }
  if(title1>title2){
    return -1;
  }
  return 0;
})

for(let x in myLibrary){
  

 createcard(myLibrary[x], tablebody)

}   
tab.appendChild(tablebody)
container.appendChild(tab)

}


function createcard(book, tab){
let card = document.createElement("tr");
//let id = document.createElement("td");
let title = document.createElement("td");
let author = document.createElement("td");
let page = document.createElement("td");
let read = document.createElement("td");
let rbutton = document.createElement("td");
let removebook = document.createElement("button");
let readbook = document.createElement("button");


//card.classList.add("bcard");
title.classList.add("longname");
author.classList.add("longname");
page.classList.add("longname");
read.classList.add("longname")




title.innerHTML = book.title;
author.innerHTML = book.author;
page.innerHTML = book.page;
read.innerHTML = book.hasrad;
removebook.innerHTML = "remove book";
readbook.innerHTML = "read";

removebook.addEventListener("click",function(){rbook(book)});
readbook.addEventListener("click", function(){hasRead(book)});

rbutton.appendChild(removebook);
rbutton.appendChild(readbook);
card.appendChild(title);
card.appendChild(author);
card.appendChild(page);
card.appendChild(read);
card.appendChild(rbutton);
tab.appendChild(card);
}
function rbook(book){
myLibrary.splice(1, currnetbook)
showbooks();

}
function hasRead(book){
book.hasrad = true;
console.log(book.hasrad)
showbooks();
}

function addnewbook(){
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}
console.log("b");
addBookToLibrary("tom", "bob", 99,false);
addBookToLibrary("td", "bo", 9,false);
console.log(myLibrary[0].id);
showbooks();

