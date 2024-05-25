function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var interes = document.getElementById("interes").value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var terminos = document.getElementById("terminos").checked;
    const open=document.getElementById('open');
    const modal_container=document.getElementById('modal_container');
    const close=document.getElementById('close');   
    
    if (nombre === "" || email === "" || telefono === "" || interes === "" || !sexo || !terminos) {}
       return(false);
    else {
        open.addEventListener('click', ()=>{
            modal_container.classList.add('show');
        })
        close.addEventListener('click', () =>{
            modal_container.classList.remove('show');
        })
        return(true);
    }
}