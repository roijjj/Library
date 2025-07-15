const myLibrary = [];
const container = document.getElementById("main")


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
for(let x in myLibrary){

 createcard(myLibrary[x]);

}   

}


function createcard(book){
let card = document.createElement("div");
let id = document.createElement("p");
let title = document.createElement("p");
let author = document.createElement("p");
let page = document.createElement("p");
let read = document.createElement("p");


card.classList.add("bcard");
title.classList.add("longname");
author.classList.add("longname");
page.classList.add("longname");
read.classList.add("longname")




title.innerHTML = book.title;
author.innerHTML = book.author;
page.innerHTML = book.page;
read.innerHTML = book.hasrad;



card.appendChild(title);
card.appendChild(author);
card.appendChild(page);
card.appendChild(read);
container.appendChild(card);
}
function removebook(){

}
function hasRead(){

}

console.log("b");
addBookToLibrary("tom", "bob", "99","true");
addBookToLibrary("td", "bo", "9","false");
console.log(myLibrary[0].id);
showbooks();

