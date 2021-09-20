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
// function mostrarConsola (mensaje) {
//     console.log (mensaje);
// }

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;

// const iva = (x) => x * 0.21;


// let usuarioIngresado = prompt ("Ingrese nombre de usuario");
// let usuario = usuarioIngresado;

// if (usuarioIngresado == "") {
//     alert ("Por favor ingrese su usuario");
//     } else if (usuario == usuarioIngresado){
//     mostrarConsola ("Bienvenido " + usuario + "!");
// }

// let email = prompt ("Ingrese su email");
// mostrarConsola ("Usted ha ingresado " + email);

// let compra = prompt ("Indique qué producto quiere comprar: caños, chapas, discos");
// while (compra != "ESC") {
//     switch (compra) {
//         case "caños": 
//             let cantidad = parseInt (prompt ("Indique cantidad a comprar"));
//             if (cantidad <= 5) {
//                 alert ("Usted ha comprado: " + cantidad);
//             } else if (cantidad <= 10) {
//                 let resultado = cantidad + 1;
//                 alert ("Recibirá un caño más de regalo. Recibirá: " + resultado);
//             } else {
//                 let resultado = cantidad + 2
//                 alert ("Recibirá dos caños más de regalo. Recibirá: " + resultado);
//             }
//             block;
//         case "discos": 
//             const precioDiscos = 340;
//             let ingresarNumero = parseInt (prompt ("Ingresar cantidad"));
//             let valorTotal = ingresarNumero * precioDiscos;
//             let precioAPagar = suma (valorTotal, iva(valorTotal));
//             alert ("Deberá abonar: " + precioAPagar);
//             block;
//         default: 
//             alert ("Usted no ha seleccionado nada");
//             block;
//     }
// }

// //QUINTA CLASE- OBJETOS
// class CrearUsuario {
//     constructor (nombre, localidad, mail){
//         this.nombre = nombre;
//         this.localidad = localidad;
//         this.pais = "Argentina";
//         this.mail = mail;
//     }
//     hablar () {
//         console.log ("Hola soy " + this.nombre + ", vivo en " + this.localidad + ". Mi mail es: " + this.mail);
//     }
// }

// const nombre = prompt ("Ingrese nombre de usuario");
// const localidad = prompt ("Ingrese su localidad");
// const mail = prompt ("Ingrese su mail");

// const usuario1 = new CrearUsuario (nombre, localidad, mail);
// const usuario2 = new CrearUsuario ("Claudio", "La Plata", "claudio@gmail");
// const usuario3 = new CrearUsuario ("Sandra", "Junin", "sandra@gmail");

// usuario1.hablar ();
// console.log (usuario2);
// console.log (usuario3); 

//SEXTA CLASE- ARRAYS
//Entregable
// let maquinas = ["cortadora de chapas", "plegadora", "balancin"];
// console.log (maquinas.join ("\n"));

// let maquinasAgregarALista = ["agujereadora de banco", "cortadora de fierros"];
// let ListadoCompleto = maquinas.concat (maquinasAgregarALista);
// console.log (ListadoCompleto.join ("\n"));

//Complementario
//ordenado por orden alfabético
// let maquinas = ["cortadora de chapas", "plegadora", "balancin"];
// let maquinasAgregarALista = ["agujereadora de banco", "cortadora de fierros"];
// let ListadoCompleto = maquinas.concat (maquinasAgregarALista);
// console.log ((ListadoCompleto.sort()).join ("\n"));

//ordenado por precio

let maquinas = [
    {name: "cortadora de chapas", precio: 30000},
    {name: "plegadora", precio: 60000},
    {name: "balancin", precio: 10000},
    {name: "agujereadora de banco", precio: 25000},
    {name: "cortadora de fierros", precio: 35000},
]; 
maquinas.sort (function (a,b) {
    return a.precio - b.precio;
})
console.log (maquinas);

// for (let precio of maquinas) {
//     console.log (precio.precio);
// }


