function checkTheme() {
    const theme = localStorage.getItem("theme")
    const inputBox = document.querySelector('#theme-switch')

    if (theme === "dark") {
        document.body.classList.add("dark-theme")
        inputBox.classList.add('active')
        inputBox.checked = "true"
        document.querySelector(".theme-switch-box").classList.add("active")
        document.querySelector(".modal").classList.add("dark-theme")
        document.querySelector(".new-transaction").classList.add("dark-theme")
        document.querySelector(".input-group small").classList.add("dark-theme")
    } else {
        document.body.classList.remove("dark-theme")
        inputBox.classList.remove('active')
        inputBox.checked = "false"
        document.querySelector(".theme-switch-box").classList.remove("active")
        document.querySelector(".modal").classList.remove("dark-theme")
        document.querySelector(".new-transaction").classList.remove("dark-theme")
        document.querySelector(".input-group small").classList.remove("dark-theme")
    }

    console.log(theme);
}

checkTheme();

function switchTheme() {
    const inputBox = document.querySelector('#theme-switch')

    if (inputBox.checked) {
        document.body.classList.add("dark-theme")
        document.querySelector('.theme-switch-box').classList.add('active')
        document.querySelector('.main-box').classList.add('active')
        document.querySelector(".modal").classList.add("dark-theme")
        document.querySelector(".new-transaction").classList.add("dark-theme")
        document.querySelector(".input-group small").classList.add("dark-theme")
        localStorage.setItem("theme", "dark")
    } else {
        document.body.classList.remove("dark-theme")
        document.querySelector('.theme-switch-box').classList.remove('active')
        document.querySelector('.main-box').classList.remove('active')
        document.querySelector(".modal").classList.remove("dark-theme")
        document.querySelector(".new-transaction").classList.remove("dark-theme")
        document.querySelector(".input-group small").classList.remove("dark-theme")
        localStorage.setItem("theme", "light")
    }
}
