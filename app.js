let myLibrary = []

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

console.log(Book)
document.querySelector('.main').innerHTML = addBookToLibrary()
