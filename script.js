// ==========================
// GALERÍA CON IMAGEN AMPLIADA
// ==========================

const imagenes = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const imgModal = document.getElementById('imgModal');
const cerrar = document.getElementById('cerrar');

imagenes.forEach(imagen => {

    imagen.addEventListener('click', () => {

        modal.style.display = 'block';
        imgModal.src = imagen.src;

    });

});

// Cerrar modal
cerrar.addEventListener('click', () => {

    modal.style.display = 'none';

});

// Cerrar al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {

    if(e.target === modal){

        modal.style.display = 'none';

    }

});

// ==========================
// ANIMACIÓN AL DESPLAZARSE
// ==========================

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});

// ==========================
// MENSAJE DE BIENVENIDA
// ==========================

window.addEventListener('load', () => {

    console.log("Bienvenido a OVADEL 🐹🌱");

});

