const library = [];
let idCounter = library.length;
const bookStorage = document.getElementById('bookStorage');
const form = document.getElementById('form');
form.style.visibility = 'hidden';

class Book {
    constructor(number, title, author, pages, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}

function addBook(titleInput, authorInput, pagesInput) {
    this.id = idCounter;
    idCounter++;
    const newBook = new Book(id, titleInput, authorInput, pagesInput, false);
    library.push(newBook);
    
    let bookDiv = document.createElement('div');
    let infoDiv = document.createElement('div');
    let bookCheck = document.createElement('button');
    let removeBtn = document.createElement('button');
    bookStorage.appendChild(bookDiv);
    bookDiv.appendChild(infoDiv);
    bookDiv.appendChild(bookCheck)
    bookDiv.appendChild(removeBtn);
    infoDiv.innerHTML = newBook.info();
    bookCheck.innerHTML = 'Reading';
    removeBtn.innerHTML = 'Remove';
    bookDiv.className = 'bookStyle';
    infoDiv.className = 'infoDiv';
    bookCheck.className = 'bookCheck';
    removeBtn.className = 'removeBtn';
    
    bookCheck.onclick = function() {
        if (newBook.status == false) {
            newBook.status = true;
            bookCheck.innerHTML = 'Completed';
        } else {
            newBook.status = false;
            bookCheck.innerHTML = 'Reading';
        }
        //console.log(newBook.status);
    }
    
    removeBtn.onclick = function() {
        bookDiv.remove();
        library.splice(newBook.id, 1);
    };

    console.log(library);
}

document.getElementById('newBook').onclick = function () {
    if (form.style.visibility === 'hidden') {
        form.style.visibility = 'visible';
    } else {
        form.style.visibility = 'hidden';
    }
}

document.getElementById('submit').onclick = function () {
    let titleInput = document.getElementById('title').value;
    let authorInput = document.getElementById('author').value;
    let pagesInput = document.getElementById('pages').value;
    if(titleInput === '' | authorInput === '' | pagesInput === '') {
        alert('Please enter title, author, and number of pages');
    } else {
        addBook(titleInput, authorInput, pagesInput);
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
    }
}
