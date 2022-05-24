//Este documento de javascript nos ayuda a cambiar la clase de CSS al header cuando se baja el scroll de la pagina y
//se regresa al inicio de esta misma
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            //En caso de que se haya bajado la pagina
            $("header").addClass("header2");
        } else {
            $("header").removeClass("header2"); //cuando inicia la pagina
        }
    });
});