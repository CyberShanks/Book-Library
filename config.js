console.log("Connected");

var booksinLibrary = [];

function displayBooks() {
    console.log("Books in Library ->");
    for (let i = 0; i < booksinLibrary.length; i++) {
        console.log(booksinLibrary[i]);
    }
}


function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

Book.prototype.removeBook = function () {
    //remove book from booksInLibrary Array
    console.log("removing...");
    var index = booksinLibrary.indexOf(this);
    booksinLibrary.splice(index, 1);
}

Book.prototype.addBook = function () {
    console.log("adding...");
    booksinLibrary.push(this);
}

//instances of books
book1 = new Book("Everything is F*cked", "Mark Manson", false);
book2 = new Book("Art of War", "Sun Tzu", true);

book1.addBook();
displayBooks();
book2.addBook();
displayBooks();
book1.removeBook();
displayBooks();