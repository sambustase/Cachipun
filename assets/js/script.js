let nombre = prompt("Ingrese su nombre"); 
let cantidad = parseInt(prompt("Ingrese La cantidad de veces que desea Jugar")); 


for(var i = 1; i <=cantidad; i++) {
    let option = parseInt(prompt("Ingrese su elección donde Tijera = 0 , Piedra = 1 , Papel = 2"));
    let numAleatorio = Math.floor(Math.random()*3);

    switch (option) {
        case 0:
            eleccionUsuario = 'Tijera';
            
            break;
        case 1:
            eleccionUsuario = 'Piedra';
          
            break;
        case 2:
            eleccionUsuario = 'Papel';
           
            break;
        default:
            eleccionUsuario = ' Valor no valido'
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
        alert("La computadora hizo  " + eleccionComputadora + " El ganador es  " + nombre); 

    }else if (eleccionUsuario == 'Papel' && eleccionComputadora == 'Tijera'  || eleccionUsuario == 'Tijera'  && eleccionComputadora == 'Piedra' || eleccionUsuario == 'Piedra' && eleccionComputadora == 'Papel'){
            alert("La computadora hizo  " + eleccionComputadora + " El ganador es la computadora"); 

    }else if (eleccionUsuario == 'Papel' && eleccionComputadora == 'Papel'  || eleccionUsuario == 'Tijera'  && eleccionComputadora == 'Tijera' || eleccionUsuario == 'Piedra' && eleccionComputadora == 'Piedra'){
        alert("La computadora hizo  " + eleccionComputadora + " Es empate");
    }
}        
