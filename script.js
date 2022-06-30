const body = document.querySelector('body')
const content = document.querySelector('.content')

const lightButton = document.querySelector('.light')
const darkButton = document.querySelector('.dark')

function pageTheme() {
  lightButton.classList.toggle('noSelectTheme')
  darkButton.classList.toggle('noSelectTheme')

  body.classList.toggle('darkTheme')
}

lightButton.addEventListener('click', pageTheme)
darkButton.addEventListener('click', pageTheme)
