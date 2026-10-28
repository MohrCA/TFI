document.addEventListener("DOMContentLoaded",() => {
    const form =document.getElementById("form-contacto");

    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const mensajeInput = document.getElementById("mensaje");

    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorTelefono = document.getElementById("error-telefono");
    const errorDocumento = document.getElementById("error-documento");

    const contenedorResumen = document.getElementById("resumen-envio");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9+\s()-]{7,15}$/;

    
})