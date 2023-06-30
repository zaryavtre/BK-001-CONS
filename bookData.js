function addFormDom() {
  let overlay = `
  <div class="form-overlay" overlay-attribute='form-attr'></div>
  `
  let formTemplate = `
        <div class="form-wrapper">
            <form class="book-form">
            <h2 class="h2">Add Your Book</h2>
                <input type="text" name="bookname" id="book-name" placeholder="Book Name">
                <input type="text" name="bookauthor" id="book-author" placeholder="Author">
                <input type="number" name="bookpages" id="book-pages" placeholder="Number of Pages">
                <button type="submit" class="sub-btn" submitbook-attribute="submit-book">Submit</button>
            </form>
        </div>`

  document.querySelector('.form-here').innerHTML = formTemplate
  document.querySelector('.main').insertAdjacentHTML("beforeend", overlay)
}

function addBookBtn(e) {
  let addBtn = `
        <div class="btn-wrapper">
            <button class="add-btn">Add Book</button>
        </div>`

  document.querySelector('.btn-here').innerHTML = addBtn
}

export { addFormDom, addBookBtn }
