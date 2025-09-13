const btn = document.getElementById('btn')
const toast = document.getElementById('toasts')

const msg = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

btn.addEventListener('click', () => createNotification())


function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toast.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return msg[Math.floor(Math.random() * msg.length)]
}