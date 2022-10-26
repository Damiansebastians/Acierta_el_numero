
/* Adivina un numero del 1 al 10,
Hay 3 intentos,
se debe ir mostrando los intentos.
finalizado los intentos no se podra seguir. */

var intentos=3

for (var veces=0;veces<3;veces++){
    
    window.alert("Tienes " + intentos + " intentos");
    var numero=window.prompt("Adivina el número escondido entre 1 y 10");

        if(numero==3){  //Número a Acertar 
        window.alert("Has acertado!!!");
        break;
    }
    else{
        window.alert("NO Has acertado!!!");
    }
intentos=intentos-1;

}
document.write("Juego Finalizado");
