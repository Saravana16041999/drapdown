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
    setTimeout(closeevery,7000)
})

closebtn.addEventListener('click',()=>{
    closeevery()
})

document.addEventListener(`click`,(e)=>{
    let newclose = e.target.classList.contains('overlay_one')
        if(newclose){
            closeevery()
        }
})



