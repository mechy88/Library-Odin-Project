// Class Declarations
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.read) ? "read" : "Not yet read"}`;
    };
    this.onDelete = function () {
        myLibrary.splice(myLibrary.indexOf(this), 1);
    }
    this.toggleRead = function () {
        this.read = !this.read;
    }
}

function addBookToShelf(book) {
    let temp = document.createElement("li");
    temp.bookObject = book;
    let innerText = document.createTextNode(temp.bookObject.info());
    temp.appendChild(innerText);
    shelf.appendChild(temp);

    let btn_delete = document.createElement("button");
    btn_delete.addEventListener('click', (event) => {
        book.onDelete();
        temp.remove();
    })
    btn_delete.appendChild(document.createTextNode("Delete"));
    temp.appendChild(btn_delete);

    let btn_toggle = document.createElement("button");
    btn_toggle.addEventListener('click', (event) => {
        temp.bookObject.toggleRead();
        innerText.textContent = temp.bookObject.info();
    })
    btn_toggle.appendChild(document.createTextNode("read"));
    temp.appendChild(btn_toggle);
}

// Setup Add Book Button
let addBookButton = document.querySelector(".submit");

addBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    let title = document.querySelector("#bookForm").elements["title"];
    let author = document.querySelector("#bookForm").elements["author"];
    let pages = document.querySelector("#bookForm").elements["pages"];
    let read = document.querySelector("#bookForm").elements["read"];

    let aquired = new Book(title.value, author.value, pages.value, read.checked);

    addBookToShelf(aquired);
    myLibrary.push(aquired);
})

// MAIN()

const myLibrary = [new Book("title", "author1", 50, true), new Book("title", "author2", 52, true)];

let shelf = document.querySelector(".shelf");

myLibrary.forEach(book => {
    addBookToShelf(book);
})

// // Preliminaries
// const myLibrary = [new Book("title", "author", 50, true), new Book("title", "author", 52, true)];

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function () {
//         return `${this.title} by ${this.author}, ${pages} pages, ${(read) ? "read" : "Not yet read"}`;
//     };
//     this.onDelete = function () {

//     }
// }

// function addBookToCatalog(Book) {
//     myLibrary.push(Book);
// }

// function addBookToShelf(book) {
//     let temp = document.createElement("li");
//     temp.bookObject = book;
//     temp.appendChild(document.createTextNode(temp.bookObject.info()));
//     shelf.appendChild(temp);

//     let btn = document.createElement("button");

//     btn.addEventListener('click', (event) => {
//         myLibrary.splice(myLibrary.indexOf(book), 1);
//         temp.remove();
//     })

//     btn.appendChild(document.createTextNode("Delete"));
//     temp.appendChild(btn);
// }

// // Setup
// let shelf = document.querySelector(".shelf");
// myLibrary.forEach(element => {
//     addBookToShelf(element)
// });

// // Setup Add Book Button
// let addBookButton = document.querySelector(".submit");

// addBookButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     let title = document.querySelector("#bookForm").elements["title"];
//     let author = document.querySelector("#bookForm").elements["author"];
//     let pages = document.querySelector("#bookForm").elements["pages"];
//     let read = document.querySelector("#bookForm").elements["read"];

//     let aquired = new Book(title.value, author.value, pages.value, read.checked);

//     addBookToShelf(aquired);
//     addBookToCatalog(aquired);
// })