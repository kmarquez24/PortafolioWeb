const elemento = document.querySelector('.contenedor-titulos h1');
const btnCambiar = document.querySelector('.btnDark');


const cambiarTitulo = () => {
    elemento.style.background = 'red';
}


btnCambiar.addEventListener('click', cambiarTitulo);