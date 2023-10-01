//FORMULARIO

function datos(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    localStorage.setItem("su nombre es: ", nombre);
    localStorage.setItem("su correo es: ", correo);
}

//
$('#dataStringExample button').on('click', function() {
    var email = $('#dataStringExample input[name="email"]').val();
    var password = $('#dataStringExample input[name="password"]').val();
    var dataString = 'email='+email+'&password='+password;

    alert('Enviando datos con dataString!\r\rInformación antes de enviar a Ajax:\r\r' + dataString);

    $.ajax({
        type: 'POST',
        url: 'process.php',
        data: dataString,
        dataType: 'json',
        success: function(response) {
            var message = `
                La información ha sido recibida en el servidor!\r\r
                Email: ${response.email}\r
                Contrseña: ${response.password}\r\r
                Token: ${response.password_md5}\r\r
                Gracias!
            `;
            alert(message);
        }
    });
});

