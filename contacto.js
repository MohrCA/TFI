document.addEventListener("DOMContentLoaded", () => {
    const form =document.getElementById("form-contacto");

    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const mensajeInput = document.getElementById("mensaje");

    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorTelefono = document.getElementById("error-telefono");
    const errorMensaje = document.getElementById("error-mensaje");

    const contenedorResumen = document.getElementById("resumen-envio");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9+\s()-]{7,15}$/;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let esValido = true;

        const nombreVal = nombreInput.value.trim();
        const emailVal = emailInput.value.trim();
        const telefonoVal = telefonoInput.value.trim();
        const mensajeVal = mensajeInput.value.trim();

        if(nombreVal === ""){
            mostrarError(nombreInput,errorNombre,"El nombre completo es obligatorio.")
            esValido=false;
        }
        else if(nombreVal.length <3) {
            mostrarError(nombreInput,errorNombre,"El nombre debe tener al menos 3 caracteres.")
            esValido=false;
        }

        if(emailVal === ""){
            mostrarError(emailInput,errorEmail,"El correo es obligatorio.")
            esValido=false;
        }
        else if(!regexEmail.test(emailVal)){
            mostrarError(emailInput,errorEmail,"Ingrese un correo válido. Ej:(correo@correo.com.")
                esValido=false;
        }

        if(telefonoVal===""){
            mostrarError(telefonoInput,errorTelefono,"El numero de telefono es obligatorio.")
            esValido=false;
        }
        else if (!regexTelefono.test(telefonoVal)){
            mostrarError(telefonoInput,errorTelefono,"Ingresar un numero de telefono valido.")
            esValido=false;
        }

        if(mensajeVal.length > 0 && mensajeVal.length < 5 ){
            mostrarError(mensajeInput,errorMensaje,"El mensaje es muy corto(Minimo 5 caracteres si quieres dejar uno.")
            esValido=false;  
        }

        if(esValido){
            contenedorResumen.innerHTML = "";
            contenedorResumen.className = "card-resumen-exito";

            const tituloResumen = document.createElement("h3");
            tituloResumen.textContent= "¡Consulta enviada con exito!"

            const parrafoTexto = document.createElement("p");
            parrafoTexto.textContent="Gracias por comunicarte con Nexo. Aquí tenés el resumen de tus datos"

            const listaDatos = document.createElement("ul");
            listaDatos.style.listStyle  = "none";
            listaDatos.style.padding = "0";
            listaDatos.style.display = "flex";
            listaDatos.style.direction = "column";
            listaDatos.style.gap = "5px";

            const itemNombre = document.createElement("li");
            itemNombre.textContent = `Nombre: ${nombreVal}`;

            const itemEmail =document.createElement("li");
            itemEmail.textContent = `Correo: ${emailVal}`;

            const itemTelefono = document.createElement("li");
            itemTelefono.textContent = `Teléfono: ${telefonoVal}`;

            const itemMensaje = document.createElement("li");
            itemMensaje.textContent = `Mensaje: ${mensajeVal !== "" ? mensajeVal : "(Sin mensaje adicional)"}`;

            listaDatos.appendChild(itemNombre);
            listaDatos.appendChild(itemEmail);
            listaDatos.appendChild(itemTelefono);
            listaDatos.appendChild(itemTelefono);

            form.reset();
        }
       
})
function mostrarError(inputElement,errorElement,mensaje) {
    inputElement.classList.add("Campo-invalido");
    errorElement.textContent = mensaje;
}
function limpiarErrores() {
    const inputs = [nombreInput,emailInput,telefonoInput,mensajeInput];
    const errores = [errorNombre,errorEmail,errorTelefono,errorMensaje];

    inputs.forEach(inputs => inputs.classList.remove("campu-invalido"));
    errores.forEach(errores => errores.textContent="");

    contenedorResumen.innerHTML="";
    contenedorResumen.className="resumen-oculto"
    }
});