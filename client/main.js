const musesContainer = document.querySelector('#muses-container')
const form = document.querySelector('form')
const editItem = document.querySelector('#editItem')
const editInput = document.getElementById("editInput")
const editIndex = document.getElementById('editIndex')


const baseURL = `http://localhost:4000`

const musesCallback = ({ data: muses }) => displayMuses(muses)
const errCallback = err => console.log(err)

const getMusesBtn = document.getElementById('getMuses')


const getMuses = () => axios.get(`${baseURL}/getMuses`).then(musesCallback).catch(errCallback)
const createMuse = body => axios.post(`${baseURL}/createMuse`, body).then(musesCallback).catch(errCallback)
const deleteMuse = id => axios.delete(`${baseURL}/deleteMuse/${id}`).then(musesCallback).catch(errCallback)
const updateQuote = (editIndex, newObj) => {
   
    axios.put(`${baseURL}/updateQuote/${editIndex.value}`, {newObj}).then(musesCallback).catch(errCallback)}

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let quote = document.querySelector('#quote')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        quote: quote.value, 
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
    <p class="muse-quote">${muses.quote}</p>
    <p class="id"> ID:${muses.id}</p>
    <button onclick="deleteMuse(${muses.id})">delete muse</button>
    `

    

    musesContainer.appendChild(museCard)
    
}

function displayMuses(arr) {
    musesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMuseCard(arr[i])
    }
}

function editQuote(e) {
    e.preventDefault()

    
    
    

    let newObj = {
        quote: editInput.value, 
    }

    updateQuote(editIndex, newObj)

    
    editInput.value = ''
    editIndex.value = ''
    
    }

form.addEventListener('submit', submitHandler)
getMusesBtn.addEventListener('click', getMuses)
editItem.addEventListener('submit', editQuote)

