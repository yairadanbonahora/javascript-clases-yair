//PRIMERA CLASE
//let nombre = prompt ("Ingrese su nombre");
//alert ("Hola," + " " + nombre + "!");

//let numero = prompt ("Ingrese monto a comprar USD");
//let monto = parseInt (numero);

//let importeTotal = monto + 20;
//alert ("Usted debe pagar:" + " " + importeTotal);

//let usuario = prompt ("Ingrese su nombre");
//let usuarioApellido = prompt ("Ingrese su apellido");
//let nombreCompleto = usuario + " " + usuarioApellido;
//alert (nombreCompleto);

//console.log (nombre)
//console.log (importeTotal)
//console.log (nombreCompleto)

//SEGUNDA CLASE
// let nombreIngresado = prompt ("Ingrese su nombre");
// let nombre = nombreIngresado;
// let apellidoIngresado = prompt ("Ingrese su apellido");
// let apellido = apellidoIngresado; 

// if (nombreIngresado == "" || apellidoIngresado == "") {
//     alert ("Por favor ingrese su nombre completo");
// } else if (nombre == nombreIngresado && apellido == apellidoIngresado){
//     alert ("Bienvenido" + " " + nombre + " " + apellido + "!");
// }

// let edad = prompt ("Ingrese su edad");
// let edadParseada = parseInt (edad);

// if (edadParseada < 18) {
//     alert ("Usted es menor de edad")
// } else if (edadParseada > 18) {
//     alert ("Usted es mayor de edad");
// } else if (edad == "") {
//     alert ("Por favor ingrese su edad"); 
// }

//TERCER CLASE
let autor = prompt ("Ingrese nombre de autor");

while (autor != "ESC") {
    switch (autor) {
        case "O´Donnell":
            alert ("Está en la sección ´Política´");
            break; 
            
        case "Foucault":
            alert ("Está en la sección ´Filosofía´");
            break;
        
        case "Raymond Aron":
            alert ("Están en la sección ´Historia´");
            break;

        default: 
            alert ("Ese autor no se encuentra disponible");
    } 

    autor = prompt ("Ingrese nombre de autor");
    console.log (autor); 
}

for (let turno = 1; turno <= 11; turno ++) {
    if (turno == 11) {
        alert ("Disculpe, el cupo está completo");
        break;
    }
    let ingresarNombre = prompt ("Ingresar nombre");
    console.log ("Turno N" + turno + " Nombre: " + ingresarNombre );
}

let colores = prompt ("Ingrese un color");
do {
    console.log (colores);
    colores = prompt ("Ingrese otro color");
} while (colores != "negro")
