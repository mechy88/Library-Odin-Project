// Preliminaries
const myLibrary = [new Book("title", "author", 50, true), new Book("title", "author", 52, true)];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages} pages, ${(read) ? "read" : "Not yet read"}`;
    };
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function addBookToShelf(book) {
    let temp = document.createElement("li");
    temp.appendChild(document.createTextNode(book.info()));
    shelf.appendChild(temp);
}

// Setup
let shelf = document.querySelector(".shelf");
myLibrary.forEach(element => {
    let temp = document.createElement("li");
    temp.appendChild(document.createTextNode(element.info()));
    shelf.appendChild(temp);
});

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