document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores ingresados
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Verificar si coinciden
    if (email === 'snake@correo.com' && password === '1234') {
        window.location.href = "academicos.html"; // Redirigir a otro archivo HTML
        console.log("si se pudo");
    } else {
        console.log("intenta de nuevo");
    }
});
