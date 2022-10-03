const hexBtn = document.getElementById('hexBtn');
const hex = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F']
const newColor = document.querySelector('.newColor')
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

function playLinks(){
   links.classList.toggle('show-links')
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
navToggle.addEventListener("click", playLinks)
