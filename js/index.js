//FORMULARIO

function datos(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    localStorage.setItem("su nombre es: ", nombre);
    localStorage.setItem("su correo es: ", correo);
}

