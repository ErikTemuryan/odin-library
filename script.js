const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const openButton = document.querySelector(".addBook");
const closeButton = document.querySelector(".close");
const dialog = document.querySelector(".dialog");
const addButton = document.querySelector(".add");

openButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

function displayBook(book) {
    const container = document.querySelector('.container');
    const bookContainer = document.createElement('div');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", () => {
        bookContainer.remove();
    });

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('title');
    titleParagraph.textContent = book.title;

    const authorParagraph = document.createElement('p');
    authorParagraph.classList.add('author');
    authorParagraph.textContent = book.author;

    const pagesParagraph = document.createElement('p');
    pagesParagraph.classList.add('pages');
    pagesParagraph.textContent = book.pages + ' pgs';

    const readButton = document.createElement('button');
    readButton.classList.add(book.read ? 'read' : 'not-read');
    readButton.textContent = book.read ? 'Read' : 'Not Read';

    bookContainer.appendChild(titleParagraph);
    bookContainer.appendChild(authorParagraph);
    bookContainer.appendChild(pagesParagraph);
    bookContainer.appendChild(readButton);
    bookContainer.appendChild(deleteButton);
    container.appendChild(bookContainer);

    readButton.addEventListener("click", () => {
        readButton.classList.toggle('read');
        readButton.classList.toggle('not-read');
        readButton.textContent = readButton.classList.contains('read') ? 'Read' : 'Not Read';
    });

    return bookContainer;
}

const addBook = document.getElementById("AddBook");
addBook.addEventListener("click", () => {
    let titleElement = document.querySelector('#title');
    let authorElement = document.querySelector('#author');
    let pagesElement = document.querySelector('#pages');
    const read = document.getElementById('Yes').checked;

    const myBookObject = new Book(titleElement.value, authorElement.value, pagesElement.value, read);
    addBookToLibrary(myBookObject);
    displayBook(myBookObject);

    dialog.close();
});