console.log('Connected')

const booksinLibrary = []

function displayBooks () {
  console.log('Books in Library ->')
  for (let i = 0; i < booksinLibrary.length; i++) {
    console.log(booksinLibrary[i])
  }
}

function findBook (title) {
  let index
  for (let i = 0; i < booksinLibrary.length; i++) {
    if (booksinLibrary[i].title === title) {
      index = i
      break
    }
  }
  return booksinLibrary[index]
}

function fetchBookObject () {
  // get title of book clicked
  const bookTitle = this.parentNode.children[0].children[1].textContent
  return bookTitle
}

function deleteBook () {
  const bookTitle = fetchBookObject.call(this)
  findBook(bookTitle).removeBook()
  // remove actual node
  this.parentNode.remove()
}

const modalWindow = document.querySelector('.modal-window')
const mainBody = document.querySelector('.main-body')

function modalPopUp () {
  // modal window pops up
  modalWindow.style.display = 'flex'
  mainBody.style.position = 'absolute'
}

function addBookEntry () {
  // get data from fields and store it in new variable
  const bookName = document.getElementById('title').value
  const authorName = document.getElementById('author').value
  const readState = document.getElementById('read-check').checked

  const book = new Book(bookName, authorName, readState)
  book.addBook()
  displayBooks()

  // close modal window
  modalWindow.style.display = 'none'
  mainBody.style.position = 'static'
}

const done = document.querySelector('#done')
done.addEventListener('click', addBookEntry)

const addBookButton = document.querySelector('.add-new-book')
addBookButton.addEventListener('click', modalPopUp)

const contentContainer = document.querySelector('.content-container')

function displayBookCard (bookObj) {
  const book = document.createElement('div')
  book.classList = 'book'
  const bookTitle = document.createElement('div')
  bookTitle.classList = 'book-title'
  const bookAuthor = document.createElement('div')
  bookAuthor.classList = 'book-author'
  const bookRead = document.createElement('div')
  bookRead.classList = 'book-read'

  const h2TitleText = document.createElement('h2')
  const h2BookName = document.createElement('h2')
  h2BookName.classList = 'book-name'
  const h4AuthorText = document.createElement('h4')
  const h4AuthorName = document.createElement('h4')
  h4AuthorName.classList = 'book-author'
  const h4Read = document.createElement('h4')
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.classList = 'read'

  const deleteButton = document.createElement('button')
  deleteButton.addEventListener('click', deleteBook)
  deleteButton.setAttribute('type', 'button')
  deleteButton.classList = 'del-button'

  bookTitle.appendChild(h2TitleText)
  bookTitle.appendChild(h2BookName)

  bookAuthor.appendChild(h4AuthorText)
  bookAuthor.appendChild(h4AuthorName)

  bookRead.appendChild(h4Read)
  bookRead.appendChild(checkbox)

  book.appendChild(bookTitle)
  book.appendChild(bookAuthor)
  book.appendChild(bookRead)
  book.appendChild(deleteButton)

  contentContainer.appendChild(book)

  h2TitleText.textContent = 'Title: '
  h4AuthorText.textContent = 'Author: '
  h4Read.textContent = 'Read: '
  deleteButton.textContent = 'Delete'

  h2BookName.textContent = bookObj.title
  h4AuthorName.textContent = bookObj.author
  checkbox.checked = bookObj.readStatus
}

function Book (title, author, readStatus) {
  this.title = title
  this.author = author
  this.readStatus = readStatus
}

Book.prototype.removeBook = function () {
  // remove book from booksInLibrary Array
  const index = booksinLibrary.indexOf(this)
  booksinLibrary.splice(index, 1)
}

Book.prototype.addBook = function () {
  booksinLibrary.push(this)
  displayBookCard(this)
}

// instances of books
const book1 = new Book('Everything is F*cked', 'Mark Manson', false)
const book2 = new Book('Art of War', 'Sun Tzu', true)

book1.addBook()
book2.addBook()

const book3 = new Book('Art of BBB', 'Mzi Oshi', true)
const book4 = new Book('BBCNA', 'Mark Twain', false)

book3.addBook()
book4.addBook()
