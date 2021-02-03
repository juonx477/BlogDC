//query Selector 

const heading = document.querySelector('#heading');

heading.textContent = 'Nuevo Heading';

// Generar Nuevo Enlace

const idioma = document.createElement('A')

// Agregar href 
idioma.href = 'nuevo-enlace.html';

// Agregar el texto 
idioma.textContent = 'Idiomas';

// Agregar la clase 
idioma.classList.add('navegacion_enlace');

// Agregar al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(idioma);

console.log(idioma);

window.onscroll = function(){
    console.log('mostrando...');
}
