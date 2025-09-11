const tagsElem = document.getElementById('tags')
const txtArea = document.getElementById('txtarea')


txtArea.focus()

txtArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }

})


function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsElem.innerHTML = ' '
    
    tags.forEach(tag => {
        const tagElem = document.createElement('span')
        tagElem.classList.add('tag')
        tagElem.innerText = tag
        tagsElem.appendChild(tagElem)
    });
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highLightTag(randomTag)
        
        setTimeout(() => {
            unHighLightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highLightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag){
    tag.classList.add('highLight')
}

function unHighLightTag(tag){
    tag.classList.remove('highLight')
}