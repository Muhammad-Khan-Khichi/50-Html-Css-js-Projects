const smallCups = document.querySelectorAll('.cup-small')
const ltrs = document.getElementById('liters')
const perc = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {

    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        perc.style.visibility = 'hidden'
        perc.style.height = 0
    }else{
        perc.style.visibility = 'visible'
        perc.style.height = `${fullCups / totalCups * 330}px`

        perc.innerText = `${fullCups / totalCups * 100}%`
    }


    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        ltrs.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}