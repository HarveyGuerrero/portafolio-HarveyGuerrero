//Menu Hamburguesa
function llamar(){
var botonera=document.querySelector('.botonera');
    botonera.classList.toggle('click');
var btnmenu=document.querySelector('.btn-menu');
    btnmenu.querySelector('.btn-menu .close').classList.toggle('fa-times');
}

//Script para Galeria
var num=1;
function adelante(){
    var img=document.getElementById('img');
    num++
    if(num>12)
    num=1;
    img.src="img/"+"img0" + num + ".jpg";
}
function atras(){
    var img=document.getElementById('img');
    num--
    if(num<1)
    num=12;
    img.src="img/"+"img0"+ num + ".jpg";
}
//Header cambio hacia abajo
window.addEventListener('scroll', Scroll);
function Scroll(){
    var header=document.getElementById('header');
    var ypos=window.pageYOffset;
    if (ypos>300){
        header.style.background="darkblue";
        header.style.height="60px";
        header.style.transition="0.5s";
    }
    else{
        header.style.background="black";
        header.style.color="white";
        header.style.height="70px";
        header.style.transition="0.5s";
    }
}


//Boton Subir
window.addEventListener('scroll', Subir);
    function Subir(){
var subir=document.getElementById("subir");
var npos=window.pageYOffset;
        if (npos>300){
            subir.style.display="block";
            subir.style.transition="0.5s";
        }
        else{
            subir.style.display="none";
            subir.style.transition="0.5s";
        }
    }

//Preloader con Javascript
var preloader=document.getElementById('preloader');
setTimeout(function(){
    preloader.style.transition="0.5s";
    preloader.style.visibility="hidden";
    
},1000);
//Script de Preloader
/*var contenido=document.getElementById('contenido');
setTimeout(function(){
    contenido.classList.add('cerrar');
    document.body.style.overflowY="visible";
},9000);*/