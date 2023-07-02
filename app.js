import { addFormDom, addBookBtn } from './bookData.js'
import { toggle, removeToggle } from './utils.js'
let bookIndex = 1
let myLibrary = []

document.addEventListener('DOMContentLoaded', addBookBtn, addFormDom())
document.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.matches('.add-btn')) {
    toggle()
  }
  if (e.target.matches('.form-overlay')) {
   removeToggle()
  }
  if (e.target.matches('.sub-btn')) {
    inputBook()
  } if (e.target.dataset.removebook) {
    removeBk(e.target.dataset.removebook)
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
  const formBookPages = parseInt(document.querySelector('#book-pages').value)
  const newBooks = new Book(formBookName, formBookAuthor, formBookPages)

  myLibrary.push(newBooks)
  console.log(myLibrary)
  removeToggle()
  renderBook()
}

function removeBk(removeId) {
    const getBookId = myLibrary.map(function(getId) {
        return getId.index
    }).indexOf(removeId)

    myLibrary.splice(getBookId, 1)
    const currentBook = document.querySelector(`.books[data-book="${removeId}"]`)
    

    console.log(getBookId)

    renderBook()


}

function renderBook() {
  let bookTemplate = ''
  myLibrary.forEach((book) => {
    bookTemplate += `
        <div class="books" data-book="${book.index}">
            <p class="book_name">${book.bookName}</p>
            <p class="book_author">${book.author}</p>
            <p class="book_num-page">${book.numberOfPages}</p>
            <button data-removebook="remove-book" class="remove-book">Remove Book</button>
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
