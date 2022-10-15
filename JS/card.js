let button = document.querySelector('input#dark-light');
let body = document.querySelector('body#principal');

function MudarTema() {
    body.classList.toggle("light-mode");
    button.innerText = 'Modo Escuro';
}