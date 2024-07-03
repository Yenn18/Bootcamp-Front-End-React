<<<<<<< HEAD
//Ejercicio 6
// Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.
let numero = null; 

    while (numero === null || isNaN(numero) || numero < 50 || numero > 100) {
        let entrada = prompt("Por favor, introduce un número entero:"); 

        if (entrada !== null) {
            numero = parseInt(entrada, 10);
            if (isNaN(numero)) {
                alert("Error. Por favor, introduce un número entero.");    //Esto lo que lo que hace que el valor numero sea igual o mayor que 50 y menor que 100 y pueda entrar en los parametro descritos,                                                            //
            } else if (numero < 50 || numero > 100) {                      //Si el numero introducido esta entre 50 y 100 saldra del bucle si no saldra un alert, diciendo es erroneo,
                alert("Es erroneo vuelve a intentarlo");                   //Volver a intentar de nuevo hasta que los parametros se han los correctos para salir del bucle.
            }
        } else {
            alert("Introduce un numero del 50 al 100."); 
        }
    }
    // Si se introduce un número erroneo, muestra un mensaje.
    alert(`Bien el ${numero}, es correcto`);

//Ejercicio 7 En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el 
//número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el 
//valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la 
//tabla de multiplicar del número elegido.

let numeroMultiple = null; 

    while (numeroMultiple === null || isNaN(numeroMultiple) || numeroMultiple < 2 || numeroMultiple > 10) {
        let numeroCorrecto = prompt("Por favor, introduce un número entero entre 2 y 10:"); 

        if (numeroCorrecto !== null) {
            numeroMultiple = parseInt(numeroCorrecto, 10);
            if (isNaN(numeroMultiple)) {                                            //Con esto hacemos que el valor numeroMultiple comprube que el numero,
                alert("Error. Por favor, introduce un número entre 2 y 10.");       // introduccido sea el correcto y salga y podamos realizar la tabla de multiplica.                                                      
            } else if (numeroMultiple < 2 || numeroMultiple > 10) {                 //Si no es correcto vuelve a empezar.     
                alert("Es erroneo vuelve a intentarlo");                   
        } else {
            alert(`Ahora muestra el ${numeroMultiple} la tabla de multiplicar`); 
        }
    }
}
console.log(`Tabla de multiplicar del ${numeroMultiple}:`);
for (let i = 1; i <=10; i++){                                           //Con esto hacemos que el valor numeroMultiple coga el numero entroduccido se multiplique,
    console.log(`${numeroMultiple} x ${i} = ${numeroMultiple * i}`);    // y realize la tabla de multiplicar con el valor nuevo introducido i.
}

// 8 Ejercicio Con un while construye y muestra por consola un "triángulo" de 7 líneas como el
// siguiente:

let estrella = 1;

while (estrella <= 7) {
    console.log('*'.repeat(estrella));  //Con esto hacemo que el valor estrella empieze por 1 y con el bucle, 
    estrella++;                         //realize que replique tantas veces como lo hayamos definido.
}

// 9 Ejercicio En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos
// negativos y cuantos ceros.

//Ejercicio 10

let secreto = 50;
let intentos = 6;
let hasGanado = false;

let numeroUsuario = Number(prompt('Dime un numero del 1 al 100 a ver si lo adivinas'));

while (!hasGanado && intentos > 1) {
    intentos--;

    if (numeroUsuario > secreto) {
        numeroUsuario = Number(prompt(`El numero secreto es Menor que ${numeroUsuario}. Te quedan ${intentos} intentos`))
    } else if (numeroUsuario < secreto){
    numeroUsuario = Number(prompt(`El numero secreto es MAYOR que ${numeroUsuario}. Te quedan ${intentos} intentos`))
    } else {
        hasGanado = true;
    }
}
if(!hasGanado){
    console.log(`!Has perdido!! El numero secreto era ${intentos}`);
}else{
    console.log(`Has ganado`);
}
=======
//Ejercicio 6
// Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.
let numero = null; 

    while (numero === null || isNaN(numero) || numero < 50 || numero > 100) {
        let entrada = prompt("Por favor, introduce un número entero:"); 

        if (entrada !== null) {
            numero = parseInt(entrada, 10);
            if (isNaN(numero)) {
                alert("Error. Por favor, introduce un número entero.");    //Esto lo que lo que hace que el valor numero sea igual o mayor que 50 y menor que 100 y pueda entrar en los parametro descritos,                                                            //
            } else if (numero < 50 || numero > 100) {                      //Si el numero introducido esta entre 50 y 100 saldra del bucle si no saldra un alert, diciendo es erroneo,
                alert("Es erroneo vuelve a intentarlo");                   //Volver a intentar de nuevo hasta que los parametros se han los correctos para salir del bucle.
            }
        } else {
            alert("Introduce un numero del 50 al 100."); 
        }
    }
    // Si se introduce un número erroneo, muestra un mensaje.
    alert(`Bien el ${numero}, es correcto`);

//Ejercicio 7 En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el 
//número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el 
//valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la 
//tabla de multiplicar del número elegido.

let numeroMultiple = null; 

    while (numeroMultiple === null || isNaN(numeroMultiple) || numeroMultiple < 2 || numeroMultiple > 10) {
        let numeroCorrecto = prompt("Por favor, introduce un número entero entre 2 y 10:"); 

        if (numeroCorrecto !== null) {
            numeroMultiple = parseInt(numeroCorrecto, 10);
            if (isNaN(numeroMultiple)) {                                            //Con esto hacemos que el valor numeroMultiple comprube que el numero,
                alert("Error. Por favor, introduce un número entre 2 y 10.");       // introduccido sea el correcto y salga y podamos realizar la tabla de multiplica.                                                      
            } else if (numeroMultiple < 2 || numeroMultiple > 10) {                 //Si no es correcto vuelve a empezar.     
                alert("Es erroneo vuelve a intentarlo");                   
        } else {
            alert(`Ahora muestra el ${numeroMultiple} la tabla de multiplicar`); 
        }
    }
}
console.log(`Tabla de multiplicar del ${numeroMultiple}:`);
for (let i = 1; i <=10; i++){                                           //Con esto hacemos que el valor numeroMultiple coga el numero entroduccido se multiplique,
    console.log(`${numeroMultiple} x ${i} = ${numeroMultiple * i}`);    // y realize la tabla de multiplicar con el valor nuevo introducido i.
}

// 8 Ejercicio Con un while construye y muestra por consola un "triángulo" de 7 líneas como el
// siguiente:

let estrella = 1;

while (estrella <= 7) {
    console.log('*'.repeat(estrella));  //Con esto hacemo que el valor estrella empieze por 1 y con el bucle, 
    estrella++;                         //realize que replique tantas veces como lo hayamos definido.
}

// 9 Ejercicio En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos
// negativos y cuantos ceros.

//Ejercicio 10

let secreto = 50;
let intentos = 6;
let hasGanado = false;

let numeroUsuario = Number(prompt('Dime un numero del 1 al 100 a ver si lo adivinas'));

while (!hasGanado && intentos > 1) {
    intentos--;

    if (numeroUsuario > secreto) {
        numeroUsuario = Number(prompt(`El numero secreto es Menor que ${numeroUsuario}. Te quedan ${intentos} intentos`))
    } else if (numeroUsuario < secreto){
    numeroUsuario = Number(prompt(`El numero secreto es MAYOR que ${numeroUsuario}. Te quedan ${intentos} intentos`))
    } else {
        hasGanado = true;
    }
}
if(!hasGanado){
    console.log(`!Has perdido!! El numero secreto era ${intentos}`);
}else{
    console.log(`Has ganado`);
}
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
