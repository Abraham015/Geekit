$(document).ready(main);

var contador = 1;

function main() {
    $(".menu_bar").click(function() {
        elemento = document.getElementById("menu");

        if (contador == 1) {
            $(elemento).animate({
                left: "0",
            });
            contador = 0;
        } else {
            contador = 1;
            $(elemento).animate({
                left: "-100%",
            });
        }
    });
}