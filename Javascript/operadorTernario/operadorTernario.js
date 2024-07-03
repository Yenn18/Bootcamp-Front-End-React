<<<<<<< HEAD
//* if else Operador Ternario

//Caso1 : En sustitucion deun if else muy simple, solo vale si tiene una linia de ejecucion

const estanCasado = true;

if(estanCasado){
    console.log('vivan los novios');
}else{
    console.log('a que esperan');
}


//Con el ternario

// PRegunta ? Ejecucion si es true : ejecusion si es falsa
estanCasado ? console.log('Vivan los novios') : console.log('A que espern');

// Cas02: Lo utilizamos en el lugar donde necesitamos porner UN VALOR O OTRO DEPENDIENDO DE UNA CONDICION.

//? Cuando creas una funcion a la derecha del igual se espera un expresion

const edad = 38;
let esMayorDeEdad;

if (edad >=18) {
    esMayorDeEdad = true;
}else{
    esMayorDeEdad =false;
}

esMayorDeEdad = edad >= 18 ? true : false;

//? en el return de una funcion

function esPar(num){
    if (num % 2 === 0) {
        return 'es par'
    }else{
        return 'Es impar'
    }
}

function esParCool (num){
    return num % 2 === 0 ? 'es par': 'es impar';
}


// en una interpolacion usando backticks y $ {}

const tuEdad = 20;
const eresNoeres = tuEdad >=18 ? 'eres' : 'Noeres';
console.log(`tiene ${tuEdad} años y ${eresNoeres}`);






=======
//* if else Operador Ternario

//Caso1 : En sustitucion deun if else muy simple, solo vale si tiene una linia de ejecucion

const estanCasado = true;

if(estanCasado){
    console.log('vivan los novios');
}else{
    console.log('a que esperan');
}


//Con el ternario

// PRegunta ? Ejecucion si es true : ejecusion si es falsa
estanCasado ? console.log('Vivan los novios') : console.log('A que espern');

// Cas02: Lo utilizamos en el lugar donde necesitamos porner UN VALOR O OTRO DEPENDIENDO DE UNA CONDICION.

//? Cuando creas una funcion a la derecha del igual se espera un expresion

const edad = 38;
let esMayorDeEdad;

if (edad >=18) {
    esMayorDeEdad = true;
}else{
    esMayorDeEdad =false;
}

esMayorDeEdad = edad >= 18 ? true : false;

//? en el return de una funcion

function esPar(num){
    if (num % 2 === 0) {
        return 'es par'
    }else{
        return 'Es impar'
    }
}

function esParCool (num){
    return num % 2 === 0 ? 'es par': 'es impar';
}


// en una interpolacion usando backticks y $ {}

const tuEdad = 20;
const eresNoeres = tuEdad >=18 ? 'eres' : 'Noeres';
console.log(`tiene ${tuEdad} años y ${eresNoeres}`);






>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
