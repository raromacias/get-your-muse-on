const hexBtn = document.getElementById('hexBtn');
const hex = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F']
const newColor = document.querySelector('.newColor')
const hexNavToggle = document.querySelector('.hex-nav-toggle')
const hexLinks = document.querySelector('.hex-links')

function pressLinks(){
   hexLinks.classList.toggle('show-hexLinks')
}

function hexChange (){
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumberHex()]
    }
    newColor.textContent = hexColor
    document.body.style.backgroundColor = hexColor
}

function getRandomNumberHex(){
    return Math.floor(Math.random() * hex.length)
}

hexBtn.addEventListener('click', hexChange)
hexNavToggle.addEventListener("click", pressLinks)
