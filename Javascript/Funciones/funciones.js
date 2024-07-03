<<<<<<< HEAD
//funciones en Javascript

    //bloques de codigo reutilizables
 
//Definir funcion 
function saludar (){
    console.log('hola');
}
const otroSaludo = saludar; // ES como hacer esto


//Ejecutar la funcion
saludar();
otroSaludo();

//-----------------------------

//Añadimos un poco de dinamismo --> parametros

function buenosDias (nombre){

    console.log('Buenos dias, ' + nombre);

}
buenosDias('Ivan');
buenosDias('Ruben');
buenosDias();

//Podemos validar datos dentro de la funcion de forma normal

function buenasTardes(nombre) {
    if (nombre !== undefined) {
        console.log('Buenas Tardes,' + nombre);
        
    }else{
        console.log('Buenas Tardes, amig@');
    }
    
}

buenasTardes('Atenea');
buenasTardes();

//Podemos darle un valor por defecto a los parametros

function buenasNoches (nombre){
    console.log('BuenasNoches,' + nombre);
}
buenasNoches('Adri');
buenasNoches();

//Podemos pedir tantos parametros como  me de la gana

function muyBuenas(nombre = 'Amigo',apellido = '',edad = 29) {
    console.log(`muyBuenas, ${nombre} ${apellido}, tienes ${edad} años`);
    
}
muyBuenas('Jenny', 'bal', 20);

//Podemos definir que puedes pasar TANTO PARAMETROS COMO DEDIA EL QUE EJECUTA.

function sumarDosNumero(a,b) {
    console.log(a + b);
    
}
sumarDosNumero (4, 6);

// usando lo contrario del spreadOperator ... podemos permitir infinitos parametros, 
//Javascript los metera todo en un array que se llama como hayas dicho, en este caso "numeros".


//Spread Operator  [1,2,3] -->  1,2,3
//Rest operator     1,2,3  --> [1,2,3]

function sumarVariosNumeros(...numeros) {
    let total = 0;
    for (const num of numeros) {
        total += num;
    }
    console.log('total' + total);
}

sumarVariosNumeros (4,6,8)

//-------------------------------

function cuadrado(num) {
    const resultado = num **2 // ** es por por 
    console.log(resultado);
}

const numero = 7;
 cuadrado(numero);

 //Normas del RETURN.
 //Despues del return no se ejecuta nada mas .

 function resta(num1, num2) {
    return num1 - num2
    console.log('ESto no se ejecuta'); // Rompe la ejecucion y no se ejecuta.
 }
const resta5y2 = resta (5,3);
console.log(resta5y2);

// Aunque una funcion no retorne nada explicitament, siempre retornara undefined.

function hola() {
    console.log('hola');
    
}
const retornaHola = hola();
console.log(retornaHola);
=======
//funciones en Javascript

    //bloques de codigo reutilizables
 
//Definir funcion 
function saludar (){
    console.log('hola');
}
const otroSaludo = saludar; // ES como hacer esto


//Ejecutar la funcion
saludar();
otroSaludo();

//-----------------------------

//Añadimos un poco de dinamismo --> parametros

function buenosDias (nombre){

    console.log('Buenos dias, ' + nombre);

}
buenosDias('Ivan');
buenosDias('Ruben');
buenosDias();

//Podemos validar datos dentro de la funcion de forma normal

function buenasTardes(nombre) {
    if (nombre !== undefined) {
        console.log('Buenas Tardes,' + nombre);
        
    }else{
        console.log('Buenas Tardes, amig@');
    }
    
}

buenasTardes('Atenea');
buenasTardes();

//Podemos darle un valor por defecto a los parametros

function buenasNoches (nombre){
    console.log('BuenasNoches,' + nombre);
}
buenasNoches('Adri');
buenasNoches();

//Podemos pedir tantos parametros como  me de la gana

function muyBuenas(nombre = 'Amigo',apellido = '',edad = 29) {
    console.log(`muyBuenas, ${nombre} ${apellido}, tienes ${edad} años`);
    
}
muyBuenas('Jenny', 'bal', 20);

//Podemos definir que puedes pasar TANTO PARAMETROS COMO DEDIA EL QUE EJECUTA.

function sumarDosNumero(a,b) {
    console.log(a + b);
    
}
sumarDosNumero (4, 6);

// usando lo contrario del spreadOperator ... podemos permitir infinitos parametros, 
//Javascript los metera todo en un array que se llama como hayas dicho, en este caso "numeros".


//Spread Operator  [1,2,3] -->  1,2,3
//Rest operator     1,2,3  --> [1,2,3]

function sumarVariosNumeros(...numeros) {
    let total = 0;
    for (const num of numeros) {
        total += num;
    }
    console.log('total' + total);
}

sumarVariosNumeros (4,6,8)

//-------------------------------

function cuadrado(num) {
    const resultado = num **2 // ** es por por 
    console.log(resultado);
}

const numero = 7;
 cuadrado(numero);

 //Normas del RETURN.
 //Despues del return no se ejecuta nada mas .

 function resta(num1, num2) {
    return num1 - num2
    console.log('ESto no se ejecuta'); // Rompe la ejecucion y no se ejecuta.
 }
const resta5y2 = resta (5,3);
console.log(resta5y2);

// Aunque una funcion no retorne nada explicitament, siempre retornara undefined.

function hola() {
    console.log('hola');
    
}
const retornaHola = hola();
console.log(retornaHola);
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
