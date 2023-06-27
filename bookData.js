function addFormDom() {
    let formTemplate = `
        <div class="form-overlay">
            <form class="book-form">
                <input type="text" name="bookname" placeholder="Book Name">
                <input type="text" name="bookauthor" placeholder="Author">
                <input type="number" name="bookpages" placeholder="Number of Pages">
            </form>
        </div>`

        return formTemplate
}

function addBookBtn() {
    let addBtn = `
        <div class="btn-wrapper">
            <button class="add-btn">Add Book</button>
        </div>`
    return addBtn
}

export {addFormDom, addBookBtn}