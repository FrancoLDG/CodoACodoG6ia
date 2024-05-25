function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var interes = document.getElementById("interes").value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var terminos = document.getElementById("terminos").checked;
    const btnAbrirModal= document.querySelector("#btn-abrir-modal")
    const btnCerrarModal= document.querySelector("#btn-cerrar-modal")
    const modal= document.querySelector("#modal")
    
    if (nombre === "" || email === "" || telefono === "" || interes === "" || !sexo || !terminos) {
        alert("Por favor completa todos los campos obligatorios.")}
    else{

        btnAbrirModal.addEventListener("click",()=>{
            modal.showModal();
        })

        btnCerrarModal.addEventListener("click",()=>{
            modal.close();
        })
        
        return false;
    }
    
    return true;
}