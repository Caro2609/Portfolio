let menuVisible = false;
//Para mostrar/ocultar el Menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Para ocultar el menu después de seleccionar una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Animaciones de las barras de Progreso
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var dictancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(dictancia_skills >= 300){
        let efectoHabilidades = document.getElementsByClassName("progreso");
        efectoHabilidades[0].classList.add("html");
        efectoHabilidades[1].classList.add("css");
        efectoHabilidades[2].classList.add("javascript");
        efectoHabilidades[3].classList.add("gitgithub");
        efectoHabilidades[4].classList.add("nodejs");
        efectoHabilidades[5].classList.add("comunicacion");
        efectoHabilidades[6].classList.add("trabajo");
        efectoHabilidades[7].classList.add("responsabilidad");
        efectoHabilidades[8].classList.add("creatividad");
        efectoHabilidades[9].classList.add("proactividad");
    }
}


//detecto el scrolling para aplicar la animación de la barra de progreso
window.onscroll = function(){
    efectoHabilidades();
}
    
