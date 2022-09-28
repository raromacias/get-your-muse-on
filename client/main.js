const musesContainer = document.querySelector('#muses-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000`

const musesCallback = ({ data: muses }) => displayMuses(muses)
const errCallback = err => console.log(err)

const getMusesBtn = document.getElementById('getMuses')


const getMuses = () => axios.get(`${baseURL}/getMuses`).then(musesCallback).catch(errCallback)
const createMuse = body => axios.post(`${baseURL}/createMuse`, body).then(musesCallback).catch(errCallback)
const deleteMuse = id => axios.delete(`${baseURL}/deleteMuse/${id}`).then(musesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let quote = document.querySelector('#quote')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        quote: [quote.value], 
        imageURL: imageURL.value
    }

    createMuse(bodyObj)

    name.value = ''
    quote.value = ''
    imageURL.value = ''
    }

function createMuseCard(muses) {
    const museCard = document.createElement('div')
    museCard.classList.add('muse-card')

    museCard.innerHTML = `<img alt='muse cover image' src = ${muses.imageURL} class="muse-cover-image"/>
    <p class="name">${muses.name}</p>
    <div class="btns-container">
    <p class="muse-quote">${muses.quote[0]}</p>
</div>
    <button onclick="deleteMuse(${muses.id})">delete</button>
    `


    musesContainer.appendChild(museCard)
}

function displayMuses(arr) {
    musesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMuseCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
getMusesBtn.addEventListener('click', getMuses)