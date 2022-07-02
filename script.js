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

const playButton = document.querySelector('.play')
const stopButton = document.querySelector('.stop')
const additionTimerButton = document.querySelector('.additionTimer')
const subtractionTimer = document.querySelector('.subtractionTimer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const minutesInital = minutesDisplay.textContent
let idTimer
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

function stopTimer(id) {
  clearTimeout(id)
}

function startTimer() {
  idTimer = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    seconds = seconds - 1
    if (minutes == 0 && seconds == 0) {
      minutesDisplay.textContent = String(minutesInital).padStart(2, '0')
      secondsDisplay.textContent = String(seconds).padStart(2, '0')
      clearTimeout(idTimer)
      return
    }
    if (seconds < 0) {
      minutes = minutes - 1
      seconds = 59

      minutesDisplay.textContent = String(minutes).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    startTimer()
  }, 1000)
}

/* Display Timer Event */

playButton.addEventListener('click', startTimer)

stopButton.addEventListener('click', () => stopTimer(idTimer))

additionTimerButton.addEventListener('click', function () {
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
})

subtractionTimer.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)

  minutes = minutes - 5
  if (minutes <= 0) {
    minutes = 0
  }

  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})

/* Dark Theme */
lightButton.addEventListener('click', pageTheme)
darkButton.addEventListener('click', pageTheme)

/* Sound Event */
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
