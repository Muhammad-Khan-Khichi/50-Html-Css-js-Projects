const hourElem = document.querySelector('.hour')
const minElem = document.querySelector('.minute')
const secElem = document.querySelector('.second')
const timeElem = document.querySelector('.time')
const dateElem = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hourForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourElem.style.transform = `
        translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)
    `
    minElem.style.transform = `
        translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)
    `
    secElem.style.transform = `
        translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)
    `

    timeElem.innerHTML = `${hourForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    dateElem.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)