import { addFormDom, addBookBtn } from './bookData.js'
let bookIndex = 0
let myLibrary = []
document.addEventListener('DOMContentLoaded', addBookBtn, addFormDom())
document.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.matches('.add-btn')) {
    document.querySelector('.form-overlay').classList.toggle('show-overlay')
  }
  if (e.target.dataset.overlay) {
    document.querySelector('.form-overlay').classList.remove('.show-overlay')
  }
  if (e.target.matches('.sub-btn')) {
    inputBook()
  }
})

function Book(bookName, author, numberOfPages) {
  this.bookName = bookName
  this.author = author
  this.numberOfPages = numberOfPages
  this.index = bookIndex++
}

const newBook = new Book('Game', 'Olissip', 124)
const secBook = new Book('Mount Doom', 'Fior', 545)

myLibrary.push(newBook, secBook)

function inputBook() {
  const formBookName = document.querySelector('#book-name').value
  const formBookAuthor = document.querySelector('#book-author').value
  const formBookPages = document.querySelector('#book-pages').value
  const newBooks = new Book(formBookName, formBookAuthor, formBookPages)

  myLibrary.push(newBooks)
  console.log(myLibrary)
  renderBook()
}

function renderBook() {
  let bookTemplate = ''
  myLibrary.forEach((book) => {
    bookTemplate += `
        <div class="books" book-attribute="main-book">
            <p class="book_name">${book.bookName}</p>
            <p class="book_author">${book.author}</p>
            <p class="book_num-page">${book.numberOfPages}</p>
        </div>
        `
  })

  document.querySelector('.book-here').innerHTML = bookTemplate
}

renderBook()

function addBookToLibrary() {
  let template = ''
  for (let i = 0; i < myLibrary.length; i++) {}
}

console.log()
