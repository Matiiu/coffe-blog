// Las tres formas mas comunes de selweccionar contenido:
//queryselector: Te va a retornar ninguno o hasta un elemento que concuerde con el selector que estas escribiendo
//clase se selecciona con un '.' y id con '#' es muy parecido a como se llaman las clases y id en CSS
//Nota: si pones un selector incorrecto n ote saldra ninguna error en consola solo saldra 'null'
const heading = document.querySelector('.header__texto h2') //0 o 1 Elemento
// heading.textContent= 'New Heading'
heading.classList.add('nueva-clase')


//queryselectorAll: Te va retornar de 0 a todos las clases que concuerden con el selector 
const LINK = document.querySelectorAll('.navegacion a')
LINK[0].textContent = 'Cambio el texto'
LINK[0].href = 'http://google.com'
LINK[0].classList.add('new-class')
//  LINK[0].classList.remove('navegacion__enlaces')


//getElementById: Es muy similar a los 2 de arriba pero ya no se utiliza tanto en las nueva versiones de JS


// Generar nuevo enlace

/* const NEWLINK = document.createElement('A') //Se recomienda poner la etiqueta en mayuscula por buenas pactices 

//Agregar el href
NEWLINK.href = 'nuevo-enlace.html'
//El texto 
NEWLINK.textContent = 'New Link'
//La clase 
NEWLINK.classList.add('navegacion__enlaces')



const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(NEWLINK)

console.log(NEWLINK)



/////EVENTOS JS////
console.log(1)
window.addEventListener('load', toPrint)

window.onload = function () {
    console.log(3)
}

document.addEventListener('DOMContentLoaded',() => { //DOMContentLoaded solo espera que se descargue el HTML (no le importa si ya se descargaron el CSS y las imagenes)
    console.log(4)
})
console.log(5)

function toPrint() {
    console.log(2)
}

window.onscroll = (e) => { //onscroll detecta cuando se le de scroll
    console.log(e)
} */


//SELECCIONAR ELEMENTOS Y ASOCIARLES UN EVENTO

//EVENTOS CLICK

/* let btnSent = document.querySelector('.boton--primario')
btnSent.addEventListener('click', (e) => {
    console.log(e.target)
    e.preventDefault() //prevenir la accion por default (esto es util para validar un formulario)
    console.log('Enviando Formulario')
}) */


//EVENTOS DEL TACLADO (inputs and textarea)
const data = { //Los nombres de la llave del objeto tienen que ser igual que la de los inputs o id registrados 
    nombre: '',
    email: '',
    mensaje: ''
}

let nombre = document.querySelector('#nombre')
let email = document.querySelector('#email')
let mensaje = document.querySelector('#mensaje')
//change valida lo que se hace hasta que termine o se salga del input
//input hace validación en itendo real 
nombre.addEventListener('input', readText)

email.addEventListener('input', readText)

mensaje.addEventListener('input', readText)

function readText(e) {
    console.log(e.target)

data[e.target.id] = e.target.value

  
}

//EVENTO DE SUBMIT

//si se va seleccionar el evento submit no se selecciona el boton si no el formulario y sebe tener un input de tipo submit... Mientras que el evento click se puede escuchar hasta en un texto.
let form =document.querySelector('.formulario')
form.addEventListener('submit',(e) =>{
    
    e.preventDefault()

    //Validar el formulario
let {nombre, email, mensaje} = data

if(nombre === '' || email === '' || mensaje ===''){
    showAlert('Error, All fields are required',true)

return //Corta la ejecución del codigo
}
showAlert('The data is correct')
    



    //Enviar el formulario
})

function showAlert(message,error = null){
    let alert = document.createElement('P')
    alert.textContent=message
    
    if(error){
        alert.classList.add('error')
    }
    else{
        alert.classList.add('rigth')
    }   
    
    form.append(alert)
        //desaparezca 
setTimeout(() => {
    alert.remove()
}, 5000)
}




