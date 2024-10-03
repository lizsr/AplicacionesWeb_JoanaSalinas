// Selecciona todas las imágenes del slider
let slides = document.querySelectorAll('.slider-image');
let currentSlide = 0;

// Función para cambiar de imagen
function changeSlide() {
    // Oculta la imagen actual
    slides[currentSlide].classList.remove('active');

    // Cambia al siguiente slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Muestra la siguiente imagen
    slides[currentSlide].classList.add('active');
}

// Inicia el slider cambiando cada 3 segundos
setInterval(changeSlide, 3000);




function mostrarFormulario(producto) {
    // Cargar el formulario desde el archivo externo
    fetch('forms/formulario_comprar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('formulario-container').innerHTML = data;
            document.getElementById('producto').value = producto;
            document.getElementById('modal-form').style.display = 'block';
        });
}

function cerrarFormulario() {
    document.getElementById('modal-form').style.display = 'none';
}

// Cerrar el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == document.getElementById('modal-form')) {
        document.getElementById('modal-form').style.display = 'none';
    }
}

 // Función para obtener parámetros de la URL
 function obtenerParametro(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Al cargar la página, establece el valor del campo del producto
document.addEventListener('DOMContentLoaded', function() {
    const producto = obtenerParametro('producto');
    if (producto) {
        document.getElementById('producto').value = decodeURIComponent(producto);
    }
});

// Manejo del envío del formulario
document.getElementById('compra-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe realmente
    document.getElementById('compra-form').style.display = 'none'; // Oculta el formulario
    document.getElementById('mensaje-gracias').style.display = 'block'; // Muestra el mensaje de agradecimiento
});


 // Función para obtener parámetros de la URL
 function obtenerParametro(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// assets/scripts/slider.js

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});



  