let nombre = prompt("Ingrese su nombre"); 
let cantidad = parseInt(prompt("Ingrese La cantidad de veces que desea Jugar")); 


for(var i = 1; i <=cantidad; i++) {
    let option = prompt("Ingrese su elección Tijera, Piedra, Papel.").toLowerCase();
    let numAleatorio = Math.floor(Math.random()*3);
    let eleccionUsuario;
    
    if (option === "tijera") {
        eleccionUsuario = "Tijera";
    } else if (option === "piedra") {
        eleccionUsuario = "Piedra";
    } else if (option === "papel") {
        eleccionUsuario = "Papel";
    } else {
        alert('Valor no válido');
    }
    
    switch (numAleatorio) {
        case 0:
            eleccionComputadora = 'Tijera';
            break;
        case 1:
            eleccionComputadora = 'Piedra';
            break;
        case 2:
            eleccionComputadora = 'Papel';
            break;
        default:
            eleccionComputadora = ' Valor no valido'
    }

    if (eleccionUsuario == 'Tijera' && eleccionComputadora == 'Papel' || eleccionUsuario == 'Piedra' && eleccionComputadora == 'Tijera' || eleccionUsuario == 'Papel' && eleccionComputadora == 'Piedra'){
        alert("Feliciades, Ganaste!!. La computadora hizo  " + eleccionComputadora); 

    }else if (eleccionUsuario == 'Papel' && eleccionComputadora == 'Tijera'  || eleccionUsuario == 'Tijera'  && eleccionComputadora == 'Piedra' || eleccionUsuario == 'Piedra' && eleccionComputadora == 'Papel'){
            alert("Haz perdido!, La computadora hizo  " + eleccionComputadora + " El ganador es la computadora"); 

    }else if (eleccionUsuario == 'Papel' && eleccionComputadora == 'Papel'  || eleccionUsuario == 'Tijera'  && eleccionComputadora == 'Tijera' || eleccionUsuario == 'Piedra' && eleccionComputadora == 'Piedra'){
        alert("La computadora hizo  " + eleccionComputadora + " Es empate");
    }
}        
