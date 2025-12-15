document.addEventListener('DOMContentLoaded', function(){
    console.log('la pagina si carga ');

    const cajaTexto = document.querySelector('.search-input');
    const contenedorBusqueda = document.querySelector('.search-box');
    const iconoMicrofono = document.querySelector('.mic-icon');
    const iconoCamara = document.querySelector('.camera-icon');
    const logoGoogle = document.querySelector('.google-logo');
    const botonApps = document.querySelector('.apps-button');
    const botonSuerte = document.querySelectorAll('.search-button')[1];

    cajaTexto.addEventListener('focus', function(){
        console.log('El usuario hizo click en la caja de búsqueda');
        contenedorBusqueda.classList.add('focused');
    });

    cajaTexto.addEventListener('blur', function(){
        console.log('El usuario salio de la caja de búsqueda');
        contenedorBusqueda.classList.remove('focused');
    });

    cajaTexto.addEventListener('dblclick', function(){
        console.log('Doble click detectado ');
        this.value = '';
    });

    iconoMicrofono.addEventListener('mouseenter', function(){
        console.log('mouse arriba del micro');
        this.style.cursor = 'pointer';
        this.style.opacity = '0.7';
    });

    iconoMicrofono.addEventListener('mouseleave', function(){
        console.log('mouse afuera del micro');
        this.style.opacity = '1';
    });

    iconoCamara.addEventListener('mouseenter', function() {
        console.log('Mouse sobre la cámara');
        this.style.cursor = 'pointer';
        this.style.opacity = '0.7';
    });

    iconoCamara.addEventListener('mouseleave', function() {
        console.log('Mouse fuera de la cámara');
        this.style.opacity = '1';
    });

    iconoMicrofono.addEventListener('click', function(){
        console.log('click en micro');
        alert('funcion del micro si anda jalando \n\n En el google real si puedes hacer esta accion');
    });

    iconoCamara.addEventListener('click', function(){
        console.log('click en camara');
        alert('funcion del camara si anda jalando \n\n En el google real si puedes hacer esta accion');
    });

    botonSuerte.addEventListener('click', function(){
        console.log('click en suerte');

        if(cajaTexto.value.trim() !== ''){
            console.log('Busqueda: ' + cajaTexto.value);
            alert('voy a tener suerte\n\n Buscarias ' + cajaTexto.value + ' en el buscador real');
        } else {
            console.log('no tienes nada que buscar');
            alert('porfa escribe algo');
        }
    });

    logoGoogle.style.opacity= '0';
logoGoogle.style.transform = 'translateY(-20px)'

setTimeout(function(){

    console.log('animando algo');
    logoGoogle.style.transition  = 'all 0.5s ease'
    logoGoogle.style.opacity= '1';
    logoGoogle.style.transform = 'translateY(0)'

}, 100);

document .addEventListener('keydown', function(evento){
    if(evento.key === '/' && document.activeElement !== cajaTexto){
        console.log('el slash esta activado');
        evento.preventDefault();
        cajaTexto.focus();
    }

    if (evento.key === 'Escape' && document.activeElement === cajaTexto){
        console.log('Tecla "escape" presionada - borrado' );
        cojaTexto.value = '' ;
    }

    if (evento.key === 'enter' && document.activeElement === cajaTexto){
        console.log('tecla "enter" presionada - iniciando busqueda ');
    }

})

const sugerencias = [
    'clima hoy',
    'clima mañana',
    'noticias del dia',
    'youtube',
    'traductor google',
    'google maps',
    'horario de peliculas',
    'recetas de cocina',
    'como hacer slime',
    'juegos gratis',
];

let conternedorsugerencias = null;

cajaTexto.addEventListener('input', function(){

    const textoEscrito = this.value.toLowerCase();
    console.log('usuario escribido')
})
});