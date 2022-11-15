`use strict`;


const btn = document.getElementById(`btn`);

const closebtn = document.getElementById(`closebtn`)

const main = document.getElementById(`main`)

function openevery(){
    main.classList.remove('oppen')
    main.classList.add('close')
    document.querySelector('.overlay').classList.add('overlay_one')
}

function closeevery(){
    main.classList.add('oppen')
    main.classList.remove('close')
    document.querySelector('.overlay').classList.remove('overlay_one')
}
btn.addEventListener(`click`,()=>{
    openevery()
})

closebtn.addEventListener('click',()=>{
    closeevery()
})



