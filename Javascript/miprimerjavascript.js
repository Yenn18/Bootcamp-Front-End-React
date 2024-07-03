<<<<<<< HEAD
let nombre ='Jennyfer';
console.log(nombre) //Esto me lee la variable con el valor.
let Apellido ='Rodriguez';

//----------------------

let ciudad = "NuevaYork";
console.log (typeof ciudad)

//--------------------
console.log(nombre + " " + Apellido);//Se puede leer dos variable si le pones el signo +

//-----------------

const IsMarried = true; // Esto es un booleado que te lee si es true o false
console.log(typeof IsMarried) // Typeof lee el tipo que es string,  number, booleado, etc.

///--------------------------

let password = null;
console.log(password); // no hemos creado la contraseña no lo lee como null
console.log(typeof password); // Nos lo lee como ERROR.


//-------------------
const simbolo = Symbol();
console.log(typeof simbolo); // Symbol valor unico.

 //-----------------------

 //Array siempre en plural nombre

 const amigos =['jenny', 'Atenea'];
 const edades = [38, 17, 57];
 const mix = ['hola', 13, true, null, undefined] // No se utiliza mucho, pero se puede hacer.
 //-------------------------

// Con {} siempre en singular nombre
 const usuario  = {nombre: 'jenny', edad : 29, estaCasado : true}
 
 //--------------------

 // Funciones

  // --> sumar

 function sumar (a,b){
    return a + b;
 }

 const num = 3;
 const num1 = 4;
console.log(num + num1);

// Se puede concatenar

const Nombre= 'Jenny';
const apellido = 'Rodriguez';
const nombreCompleto ='Mi nombre es ' + Nombre + '' + apellido + '.';
console.log(nombreCompleto);

//Otra forma backticks

const nombreCompletoBackticks = ` Mi nombre es  ${Nombre} ${apellido}.`;
console.log(nombreCompletoBackticks);

//!Cosas raras del simbolo +

console.log('5 + 5 -->', 5 + 5);
console.log('5 + "5" -->', 5 + "5");

//Restar 

console.log('num1 - num2 -->' , num1 - num);

//!Cosas raras de la resta

console.log ('5 - true -->', 5 - false);
console.log('5 - undefined -->', 5 - undefined);
console.log('5 - null -->', 5 - null);
console.log('5 - "hola" -->', 5 - "hola");
console.log('5 - 5 -->', 5 - 5);
console.log('5 - "5" -->', 5 - "5");

//Multiplicar

console.log('num1 * num', num1 * num);
console.log('5* null -->', 5 * null); // infinity

console.log(typeof Infinity); //number

// Dividir

console.log('num1 / num', num /num1);

// modulo % 

console.log(num1 % num); // es 1 

// Es para saber si es un multiple de otro o si es par o impar

// ¿Es multiplo?
console.log(237 % 37); // No, porque no da 0, da 15
console.log(144 % 12); // Si, porque da 0 es exacto 12 + 12 = 144

// Es par

console.log(36343543 % 2 ); // No es par, es impar

//------------------

 //Extras

 
//Cuantos decimales quiere un numero.

const division = 10/3;
console.log(division);

const divisionDosDecimalesString = division.toFixed(2);
console.log(divisionDosDecimalesString); // lo a puedo en string

// Convertir un string a number

const divisionEntera= parseInt (divisionDosDecimalesString)
console.log(divisionEntera);

const divisionFlotante = parseFloat (divisionDosDecimalesString)
console.log(divisionFlotante);
const divisionNumber = Number (divisionDosDecimalesString)
console.log(divisionNumber);

const divisionPlus = 5 + +divisionDosDecimalesString;
console.log(divisionPlus);

// podemos hacerlo en la misma linia
 
const division2 = Number ((10/3).toFixed(2));
console.log('division2 -->', division2);

const division3 = 10 / 3 ;
console.log(division3);
const division3Decimales = division3.toFixed(2);
console.log(division3Decimales);

//const division3number = Number(division3number);
//console.log(division3number);

// Operadores de Asignacion

let nombrE = 'Jenny';
nombre = 'Atenea';

// Podemos utilizar la misma variable con el mismo valor estamos reasignando.

let edad = '29';
edad = edad + 3; // forma larga.

// la parte corta

edad += 3;
console.log (edad);

// la misma con el resto de operadores matematicos
 // edad = edad -1;
  edad -= 5;
console.log(edad);

edad *=2;
console.log(edad);

edad /= 4;
console.log(edad);

//---------------------

// Leevando a la misma expresion tiene OTRA FORMAR DE HACERLO.
edad = 20;
edad = edad + 1;
console.log(edad);

edad += 1;
console.log(edad);

edad++;
console.log(edad); // tambien se puede utulizar en string

edad-- ;
console.log(edad);

// Condiciones

let num2 = 6;
let num3 = 8;
 
 //if --> si se cumple entra.
 /*
        if (condicion se cumple)
        {
        se ejecuta esto;
        }
 */
if (true) {
    console.log('Dentro del if - true');
}

if (false) {
    console.log('Dentro del if -false');
}

//Operadores de comparacion o condicionales

if (num2 > num3) {
    console.log('num2 es mayor que num3');
}

 // mayor o igual

 if (num2 >= 20) {
    console.log('num2 es mayor o igual que 20');
 }

 // Menor que 

 if (num2 < 7) {
    console.log('num 2 es menor que 7');
 }

 // menor que o igual que 

 if (num2 <= 9) {
    console.log('num2 es menor o igual');
    
 }

// igual que ( solo comprueva el valor , no el tipo)

 //! No recomendado
if (5 =='5') {
    console.log('num2 tiene le mismo valor');
    
}
// igual que .. de verdad de la buena ( tambien mira el tipo de dato) ===
if (5 ==='5') {
    console.log('El primer elemento tiene EXACTAMENTE el mimso valor y tipo que el seundo');
}

let Edad = '20';


if (Edad == 18) {
    edad +=2;
}
console.log(Edad);

//Dintito de ...

//No recomendado

if (5 != '5') {
    console.log('Son distintos');
}

// Distintos de .. de verdad de la buena 
if (5 !== '5') {

    console.log('Son distintos'); // son distintos
}

const nomBre ='Jenny';
if (nomBre === 'Jenny') {
    console.log('El capo');    
}

const isAdmin = true;
if (isAdmin ===true) {
    console.log('Puedes cambiar lo que quieras');
    
}

const EDad = '29';
if (typeof EDad !== 'number') {
    console.log('Me tienes que pasar un number');
}
// podemos añadir condiciones usando && (and)  y ||(or)
let NoMBRE ='jennyfer';
let EDAD = 29;
// true &&
if (NoMBRE === 'jennyfer' && EDAD >= 18) {
    console.log('jennyfer, puedes pasar.');
  }

// Esto se ejecutará si el nombre es 'Carlos' o 'Ivan'
if (NoMBRE === 'jennyfer' || NoMBRE === 'Sergio') {
    console.log('No moláis tanto como jennyfer');
  }

/*
Con  AND
 
 true && true = true
 true && false = flase
 flase & false = false
 false & true = false

 Con OR

 true && true = true
 true && flase = true
 false && true = true
 false && false = false
*/













=======
let nombre ='Jennyfer';
console.log(nombre) //Esto me lee la variable con el valor.
let Apellido ='Rodriguez';

//----------------------

let ciudad = "NuevaYork";
console.log (typeof ciudad)

//--------------------
console.log(nombre + " " + Apellido);//Se puede leer dos variable si le pones el signo +

//-----------------

const IsMarried = true; // Esto es un booleado que te lee si es true o false
console.log(typeof IsMarried) // Typeof lee el tipo que es string,  number, booleado, etc.

///--------------------------

let password = null;
console.log(password); // no hemos creado la contraseña no lo lee como null
console.log(typeof password); // Nos lo lee como ERROR.


//-------------------
const simbolo = Symbol();
console.log(typeof simbolo); // Symbol valor unico.

 //-----------------------

 //Array siempre en plural nombre

 const amigos =['jenny', 'Atenea'];
 const edades = [38, 17, 57];
 const mix = ['hola', 13, true, null, undefined] // No se utiliza mucho, pero se puede hacer.
 //-------------------------

// Con {} siempre en singular nombre
 const usuario  = {nombre: 'jenny', edad : 29, estaCasado : true}
 
 //--------------------

 // Funciones

  // --> sumar

 function sumar (a,b){
    return a + b;
 }

 const num = 3;
 const num1 = 4;
console.log(num + num1);

// Se puede concatenar

const Nombre= 'Jenny';
const apellido = 'Rodriguez';
const nombreCompleto ='Mi nombre es ' + Nombre + '' + apellido + '.';
console.log(nombreCompleto);

//Otra forma backticks

const nombreCompletoBackticks = ` Mi nombre es  ${Nombre} ${apellido}.`;
console.log(nombreCompletoBackticks);

//!Cosas raras del simbolo +

console.log('5 + 5 -->', 5 + 5);
console.log('5 + "5" -->', 5 + "5");

//Restar 

console.log('num1 - num2 -->' , num1 - num);

//!Cosas raras de la resta

console.log ('5 - true -->', 5 - false);
console.log('5 - undefined -->', 5 - undefined);
console.log('5 - null -->', 5 - null);
console.log('5 - "hola" -->', 5 - "hola");
console.log('5 - 5 -->', 5 - 5);
console.log('5 - "5" -->', 5 - "5");

//Multiplicar

console.log('num1 * num', num1 * num);
console.log('5* null -->', 5 * null); // infinity

console.log(typeof Infinity); //number

// Dividir

console.log('num1 / num', num /num1);

// modulo % 

console.log(num1 % num); // es 1 

// Es para saber si es un multiple de otro o si es par o impar

// ¿Es multiplo?
console.log(237 % 37); // No, porque no da 0, da 15
console.log(144 % 12); // Si, porque da 0 es exacto 12 + 12 = 144

// Es par

console.log(36343543 % 2 ); // No es par, es impar

//------------------

 //Extras

 
//Cuantos decimales quiere un numero.

const division = 10/3;
console.log(division);

const divisionDosDecimalesString = division.toFixed(2);
console.log(divisionDosDecimalesString); // lo a puedo en string

// Convertir un string a number

const divisionEntera= parseInt (divisionDosDecimalesString)
console.log(divisionEntera);

const divisionFlotante = parseFloat (divisionDosDecimalesString)
console.log(divisionFlotante);
const divisionNumber = Number (divisionDosDecimalesString)
console.log(divisionNumber);

const divisionPlus = 5 + +divisionDosDecimalesString;
console.log(divisionPlus);

// podemos hacerlo en la misma linia
 
const division2 = Number ((10/3).toFixed(2));
console.log('division2 -->', division2);

const division3 = 10 / 3 ;
console.log(division3);
const division3Decimales = division3.toFixed(2);
console.log(division3Decimales);

//const division3number = Number(division3number);
//console.log(division3number);

// Operadores de Asignacion

let nombrE = 'Jenny';
nombre = 'Atenea';

// Podemos utilizar la misma variable con el mismo valor estamos reasignando.

let edad = '29';
edad = edad + 3; // forma larga.

// la parte corta

edad += 3;
console.log (edad);

// la misma con el resto de operadores matematicos
 // edad = edad -1;
  edad -= 5;
console.log(edad);

edad *=2;
console.log(edad);

edad /= 4;
console.log(edad);

//---------------------

// Leevando a la misma expresion tiene OTRA FORMAR DE HACERLO.
edad = 20;
edad = edad + 1;
console.log(edad);

edad += 1;
console.log(edad);

edad++;
console.log(edad); // tambien se puede utulizar en string

edad-- ;
console.log(edad);

// Condiciones

let num2 = 6;
let num3 = 8;
 
 //if --> si se cumple entra.
 /*
        if (condicion se cumple)
        {
        se ejecuta esto;
        }
 */
if (true) {
    console.log('Dentro del if - true');
}

if (false) {
    console.log('Dentro del if -false');
}

//Operadores de comparacion o condicionales

if (num2 > num3) {
    console.log('num2 es mayor que num3');
}

 // mayor o igual

 if (num2 >= 20) {
    console.log('num2 es mayor o igual que 20');
 }

 // Menor que 

 if (num2 < 7) {
    console.log('num 2 es menor que 7');
 }

 // menor que o igual que 

 if (num2 <= 9) {
    console.log('num2 es menor o igual');
    
 }

// igual que ( solo comprueva el valor , no el tipo)

 //! No recomendado
if (5 =='5') {
    console.log('num2 tiene le mismo valor');
    
}
// igual que .. de verdad de la buena ( tambien mira el tipo de dato) ===
if (5 ==='5') {
    console.log('El primer elemento tiene EXACTAMENTE el mimso valor y tipo que el seundo');
}

let Edad = '20';


if (Edad == 18) {
    edad +=2;
}
console.log(Edad);

//Dintito de ...

//No recomendado

if (5 != '5') {
    console.log('Son distintos');
}

// Distintos de .. de verdad de la buena 
if (5 !== '5') {

    console.log('Son distintos'); // son distintos
}

const nomBre ='Jenny';
if (nomBre === 'Jenny') {
    console.log('El capo');    
}

const isAdmin = true;
if (isAdmin ===true) {
    console.log('Puedes cambiar lo que quieras');
    
}

const EDad = '29';
if (typeof EDad !== 'number') {
    console.log('Me tienes que pasar un number');
}
// podemos añadir condiciones usando && (and)  y ||(or)
let NoMBRE ='jennyfer';
let EDAD = 29;
// true &&
if (NoMBRE === 'jennyfer' && EDAD >= 18) {
    console.log('jennyfer, puedes pasar.');
  }

// Esto se ejecutará si el nombre es 'Carlos' o 'Ivan'
if (NoMBRE === 'jennyfer' || NoMBRE === 'Sergio') {
    console.log('No moláis tanto como jennyfer');
  }

/*
Con  AND
 
 true && true = true
 true && false = flase
 flase & false = false
 false & true = false

 Con OR

 true && true = true
 true && flase = true
 false && true = true
 false && false = false
*/













>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
