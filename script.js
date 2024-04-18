function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var interes = document.getElementById("interes").value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var terminos = document.getElementById("terminos").checked;
    
    if (nombre === "" || email === "" || telefono === "" || interes === "" || !sexo || !terminos) {
        alert("Por favor completa todos los campos obligatorios.");
        return false;
    }
    
    return true;
}