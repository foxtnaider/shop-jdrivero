"use strict"
// datos que vienen desde una api
const livinArea = [
    {valor: '4500 FT'},
    {valor: '4100 FT'},
    {valor: '4220 FT'},
    {valor: '3500 FT'},
    {valor: '1500 FT'},
    {valor: '2500 FT'},
    {valor: '2600 FT'},
    {valor: '1000 FT'},
]
const storys = [
    {story: '1 Story'},
    {story: '2 Storys'},
]
const beds = [
    {bed: '1 bed'},
    {bed: '2 bed'},
    {bed: '3 bed'},
    {bed: '4 bed'},
    {bed: '5 bed'},
    {bed: '6 bed'},
    {bed: '7 bed'},
    {bed: '8 bed'},
]
const baths = [
    {bath:'1 bath'},
    {bath:'2 bath'},
    {bath:'3 bath'},
    {bath:'4 bath'},
    {bath:'5 bath'},
    {bath:'6 bath'},
    {bath:'7 bath'},
]

// Mobile Nav toggle
const btn = document.querySelector('.btn-nav-menu')
const btnOpen = document.querySelector('.btn-nav-menu-open')
const btnClose = document.querySelector('.btn-nav-menu-close')
const nav = document.querySelector('.nav-movil')
let isOpen = false
// desplega y oculta em menu mobile
btn.addEventListener('click',()=>{
    isOpen = !isOpen
    if (isOpen) {
        nav.classList.add('active')
        btnOpen.setAttribute('class','hidden')
        btnClose.setAttribute('class','block')
    } else {
        btnOpen.setAttribute('class','block')
        btnClose.setAttribute('class','hidden')
        nav.classList.remove('active')
    }
})


// Funcion para ocultar o mostrar los inputs en product filter
function collapsible(attr){
    
    const ico = document.querySelector(`.${attr}-1`)
    const el = document.querySelector(`.${attr}-2`)
   
    let clase = el.classList
    if ( clase[2] === 'block' ) {
        // oculta el contedido 
        el.classList.remove('block') 
        el.classList.add('hidden')
        // bambia el icono up - down
        ico.classList.remove('fa-chevron-up')
        ico.classList.add('fa-chevron-down')
    }else {
        // muestra el contenido
        el.classList.remove('hidden')
        el.classList.add('block')
        // bambia el icono up - down
        ico.classList.remove('fa-chevron-down')
        ico.classList.add('fa-chevron-up')
    }
}

//Funcion para busqueda en formulario de filtros
function filter(text) {

    const input = document.querySelector(`.${text}`).value.toLowerCase()
    const print = document.querySelector(`#${text}`)
    print.innerHTML = ''

    for (let filter of livinArea) {
        let val = filter.valor.toLowerCase()
        if(val.indexOf(input) !== -1){
            // console.log(filter.valor)
            print.innerHTML += `
            <div class="input-wrapper options md:flex md:items-center my-2">
                <label class="checkbox-label md:w-2/3 block text-orange-400 font-bold">
                    <input type="radio" name="valor" id="" class="mr-2 leading-tight">
                    <span class="text-sm">${filter.valor}</span>
                </label>
            </div>
            `
        }
        
        
    }
    // console.log(input)
}

// slider categories
function slider(event, id){
    event.preventDefault()

    const slider = document.querySelector('.slider')
    let list = slider.children //obtengo los li internos
    for (let i = 0; i < list.length; i++) {
        const element = list[i]; //obtengo individual cada li para manupularlo
        // si el li es igual al li seleccionado de agrego la clase opacitys en caso contrario lo remuevo
        element.id === id ? element.classList.add('opacitys') : element.classList.remove('opacitys') 
    }
}

// console.log(nav)