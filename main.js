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
// let autor = prompt ("Ingrese nombre de autor");

// while (autor != "ESC") {
//     switch (autor) {
//         case "O´Donnell":
//             alert ("Está en la sección ´Política´");
//             break; 
            
//         case "Foucault":
//             alert ("Está en la sección ´Filosofía´");
//             break;
        
//         case "Raymond Aron":
//             alert ("Están en la sección ´Historia´");
//             break;

//         default: 
//             alert ("Ese autor no se encuentra disponible");
//     } 

//     autor = prompt ("Ingrese nombre de autor");
//     console.log (autor); 
// }

// for (let turno = 1; turno <= 11; turno ++) {
//     if (turno == 11) {
//         alert ("Disculpe, el cupo está completo");
//         break;
//     }
//     let ingresarNombre = prompt ("Ingresar nombre");
//     console.log ("Turno N" + turno + " Nombre: " + ingresarNombre );
// }

// let colores = prompt ("Ingrese un color");
// do {
//     console.log (colores);
//     colores = prompt ("Ingrese otro color");
// } while (colores != "negro")

//INTEGRADOR
function mostrarConsola (mensaje) {
    console.log (mensaje);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const iva = (x) => x * 0.21;



let usuarioIngresado = prompt ("Ingrese nombre de usuario");
let usuario = usuarioIngresado;

if (usuarioIngresado == "") {
    alert ("Por favor ingrese su usuario");
    } else if (usuario == usuarioIngresado){
    alert ("Bienvenido " + usuario + "!");
}

let email = prompt ("Ingrese su email");
alert ("Usted ha ingresado " + email);

let compra = prompt ("Indique qué producto quiere comprar: caños, chapas, discos");
while (compra != "ESC") {
    switch (compra) {
        case "caños": 
            let cantidad = parseInt (prompt ("Indique cantidad a comprar"));
            if (cantidad <= 5) {
                alert ("Usted ha comprado: " + cantidad);
            } else if (cantidad <= 10) {
                let resultado = cantidad + 1;
                alert ("Recibirá un caño más de regalo. Recibirá: " + resultado);
            } else {
                let resultado = cantidad + 2
                alert ("Recibirá dos caños más de regalo. Recibirá: " + resultado);
            }
            block;
        case "discos": 
            const precioDiscos = 340;
            let ingresarNumero = parseInt (prompt ("Ingresar cantidad"));
            let valorTotal = ingresarNumero * precioDiscos;
            let precioAPagar = suma (
            (valorTotal, iva(valorTotal))
            );
            alert ("Deberá abonar: " + precioAPagar);
            block;
        default: 
            alert ("Usted no ha seleccionado nada");
            block;
    }
}