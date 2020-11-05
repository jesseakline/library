const library = [];
const bookStorage = document.getElementById('bookStorage');
const form = document.getElementById('form');
form.style.visibility = 'hidden';

class Book {
    constructor(number, title, author, pages, status) {
        this.number = number;
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
    number = library.length;
    
    const book1 = new Book(number, titleInput, authorInput, pagesInput, false);
    library.push(book1);
    let bookDiv = document.createElement('div');
    let infoDiv = document.createElement('div');
    let bookCheck = document.createElement('button');
    let removeBtn = document.createElement('button');
    bookStorage.appendChild(bookDiv);
    bookDiv.appendChild(infoDiv);
    bookDiv.appendChild(bookCheck)
    bookDiv.appendChild(removeBtn);
    infoDiv.innerHTML = book1.info();
    bookCheck.innerHTML = 'Reading';
    removeBtn.innerHTML = 'Remove';
    bookDiv.className = 'bookStyle';
    infoDiv.className = 'infoDiv';
    bookCheck.className = 'bookCheck';
    removeBtn.className = 'removeBtn';
    
    bookCheck.onclick = function() {
        if (book1.status == false) {
            book1.status = true;
            bookCheck.innerHTML = 'Completed';
        } else {
            book1.status = false;
            bookCheck.innerHTML = 'Reading';
        }
        //console.log(book1.status);
    }
    
    removeBtn.onclick = function() {
        bookDiv.remove();
        library.splice(book1.number, 1);
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
    addBook(titleInput, authorInput, pagesInput);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}
