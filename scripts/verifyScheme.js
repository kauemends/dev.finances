function switchTheme() {
    const pageBackground = document.querySelector("body")
    const modal = document.querySelector(".modal")
    const newTransaction = document.querySelector(".new-transaction")
    const transactionSmall = document.querySelector(".input-group small")

    pageBackground.classList.toggle("dark-theme")
    modal.classList.toggle("dark-theme")
    newTransaction.classList.toggle("dark-theme")
    transactionSmall.classList.toggle("dark-theme")
}

function animationButton() {
    const inputBox = document.querySelector('#theme-switch');

    inputBox.addEventListener('click',()=>{
    if (inputBox.checked) {
        document.querySelector('.main-box').classList.add('active');
    } else {
        document.querySelector('.main-box').classList.remove('active');
    }
    })

}
