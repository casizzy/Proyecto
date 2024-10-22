document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function() {
        sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });

    function ValidarLogin(){
   

         if (email.value == 'snake@correo.com' && password.value == '1234'){
            window.location.href = "academicos.html";
        } else {
            console.log("intenta de nuevo"); 
        }
    }

    enviar.addEventListener("click",ValidarLogin);




});