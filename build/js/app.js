
document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
    barraMenu();
    mostrarMenu();
    //publicacion();
});


function iniciarApp() {

    const datosUsuario = {
        nombre: 'Roxxi Gonzales',
        ciudad: 'Hermosillo Son'
    }

    // Crear el nombre del usuario
    const divUsuario = document.querySelector('#usuario');
    const apodoUsuario = document.createElement('P');
    apodoUsuario.textContent = datosUsuario.nombre;
    apodoUsuario.classList.add('usuario__apodo');

    // Crear la ciudad donde vive el usuario
    const ciudadUsuario = document.createElement('P');
    ciudadUsuario.innerHTML = datosUsuario.ciudad;
    ciudadUsuario.classList.add('usuario__ciudad');

    // Crear un icono para agregarlo a ciudadUsuario
    const iconoCiudad = document.createElement('I');
    iconoCiudad.classList.add('far', 'fa-building', 'm-2', 'azul');

    divUsuario.appendChild(apodoUsuario);
    divUsuario.appendChild(ciudadUsuario);
    ciudadUsuario.appendChild(iconoCiudad);

}

function barraMenu() {

    const burger = document.querySelector('#burger');
    
    const divBarra = document.createElement('DIV');
    divBarra.classList.add('header__barra');

    const enlaceBarra = document.createElement('A');
    enlaceBarra.classList.add('header__barra--enlace');

    const iconoBurguer = document.createElement('I');
    iconoBurguer.classList.add('fas', 'fa-bars');

    enlaceBarra.appendChild(iconoBurguer);
    divBarra.appendChild(enlaceBarra);

    burger.appendChild(divBarra);
    //console.log(burger);
}


function mostrarMenu() {

    const barra = document.querySelector('.header__barra');

    barra.addEventListener('click', () => {
       const divNavegacion = document.querySelector('#navegacion');

       divNavegacion.classList.toggle('mostrar');
    });
}




