function toggle() {
    document.querySelector('.form-overlay').classList.toggle('show-overlay')
    document.querySelector('.form-wrapper').classList.toggle('show-overlay')
}

function removeToggle() {
    document.querySelector('.form-overlay').classList.remove('show-overlay')
    document.querySelector('.form-wrapper').classList.remove('show-overlay')
}

export {toggle, removeToggle}