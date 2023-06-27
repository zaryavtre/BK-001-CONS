import { addFormDom, addBookBtn } from "./bookData.js"
//const formElement = document.querySelector('book-form')
//const formData = new FormData(formElement)

let myLibrary = []
document.addEventListener('DOMContentLoaded', addBookBtn, addFormDom())
document.addEventListener('click', function(e) {
    if(e.target.matches('.add-btn')) {
        document.querySelector('.form-overlay').classList.toggle('show-overlay')
    } if(e.target.dataset.overlay){
        document.querySelector('.form-overlay').classList.remove('.show-overlay')
    }
})


function Book(bookName, author, numPages) {
    this.bookName = bookName
    this.author = author
    this.numberOfPages = numPages

}

const newBook = new Book('Game', 'Olissip', 124)
const secBook = new Book('Mount Doom', 'Fior', 545)

myLibrary.push(newBook, secBook)

function addBookToLibrary() {
    let template = ''
    for(let i = 0; i < myLibrary.length; i++) {
        
    }  
}

console.log()
//document.querySelector('.main').innerHTML = addBookToLibrary()
