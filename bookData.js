function addFormDom() {
  let formTemplate = `
        <div class="form-overlay" overlay-attribute='form-attr'>
            <form class="book-form">
                <input type="text" name="bookname" id="book-name" placeholder="Book Name">
                <input type="text" name="bookauthor" id="book-author" placeholder="Author">
                <input type="number" name="bookpages" id="book-pages" placeholder="Number of Pages">
                <button type="submit" class="sub-btn" submitbook-attribute="submit-book">Submit</button>
            </form>
        </div>`

  document.querySelector('.form-here').innerHTML = formTemplate
}

function addBookBtn(e) {
  let addBtn = `
        <div class="btn-wrapper">
            <button class="add-btn">Add Book</button>
        </div>`

  document.querySelector('.btn-here').innerHTML = addBtn
}

export { addFormDom, addBookBtn }
