function addFormDom() {
    let formTemplate = `
        <div class="form-overlay" overlay-attribute='form-attr'>
            <form class="book-form">
                <input type="text" name="bookname" placeholder="Book Name">
                <input type="text" name="bookauthor" placeholder="Author">
                <input type="number" name="bookpages" placeholder="Number of Pages">
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

export {addFormDom, addBookBtn}