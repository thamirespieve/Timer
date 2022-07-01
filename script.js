const body = document.querySelector('body')
const lightButton = document.querySelector('.light')
const darkButton = document.querySelector('.dark')

const florestButton = document.querySelector('.florestSound')
const rainButton = document.querySelector('.rainSound')
const coffeButton = document.querySelector('.coffeSound')
const fireButton = document.querySelector('.fireSound')

let volume
const florestVol = document.querySelector('#florestVol')
const florestSound = new Audio('assests/sound/Floresta.wav')
const rainVol = document.querySelector('#rainVol')
const rainSound = new Audio('assests/sound/Chuva.wav')
const coffeVol = document.querySelector('#coffetVol')
const coffeSound = new Audio('assests/sound/Cafeteria.wav')
const fireVol = document.querySelector('#fireVol')
const fireSound = new Audio('assests/sound/Lareira.wav')

function pageTheme() {
  lightButton.classList.toggle('noSelectTheme')
  darkButton.classList.toggle('noSelectTheme')

  body.classList.toggle('darkTheme')
}

function stopMusic() {
  florestSound.pause()
  rainSound.pause()
  coffeSound.pause()
  fireSound.pause()
}

lightButton.addEventListener('click', pageTheme)
darkButton.addEventListener('click', pageTheme)

florestButton.addEventListener('click', function () {
  florestButton.classList.add('selectSound')
  rainButton.classList.remove('selectSound')
  coffeButton.classList.remove('selectSound')
  fireButton.classList.remove('selectSound')

  volume = florestVol.value / 100

  stopMusic()
  florestSound.play()
  florestSound.volume = volume
})

rainButton.addEventListener('click', function () {
  rainButton.classList.add('selectSound')
  florestButton.classList.remove('selectSound')
  coffeButton.classList.remove('selectSound')
  fireButton.classList.remove('selectSound')

  volume = rainVol.value / 100

  stopMusic()
  rainSound.play()
  rainSound.volume = volume
})

coffeButton.addEventListener('click', function () {
  coffeButton.classList.add('selectSound')
  florestButton.classList.remove('selectSound')
  rainButton.classList.remove('selectSound')
  fireButton.classList.remove('selectSound')

  volume = coffeVol.value / 100

  stopMusic()

  coffeSound.play()
  coffeSound.volume = volume
})

fireButton.addEventListener('click', function () {
  fireButton.classList.add('selectSound')
  florestButton.classList.remove('selectSound')
  rainButton.classList.remove('selectSound')
  coffeButton.classList.remove('selectSound')

  volume = fireVol.value / 100

  stopMusic()
  fireSound.play()
  fireSound.volume = volume
})
