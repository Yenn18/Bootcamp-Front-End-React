const usuario = {
    nombre: 'Jenny',
    edad: 29,
    estaCasado: true,
    conectarse: function(){console.log('conectado');}
    
}
usuario.conectarse

//Funciones sueltas isNAN, parseInt, clg

//MEtodos de los Array

const fruta = ['manza', 'pera','Cereza',];
const nums = [2,15,13,-23, 75, 4, 12];

//No puede saber si un array es o no un array usuando el "typeof"

console.log(typeof nums);

//Hay que usar arra.isArray()

console.log(Array.isArray(nums));

//--------------------------------------

//Los array usan LIFO (last in first out) con loq ue es mejor usar push y pop

//* push() --> para METER elementos al final de la ARRAY
fruta.push('Melocoton');
console.log(fruta);

//Puedes añadir varias a la vez

fruta.push ('Limon', 'Melon');
console.log(fruta);

//* pop() --> para QUITAR elemento de la ultima posicion
fruta.pop();
console.log(fruta);

// *. unshift (...elementos) -->  para METER AL PRINCIPIO DEL ELEMENTOS,
fruta.unshift('Limon');
console.log(fruta);

//* .shift --> para QUITAR elementos del principio del ARRAY

fruta.shift ();
console.log(fruta);

//-----------------------------

//* indexOf(valor) --> Devuelve el indice del array en la posicion donde se encuentra el valor que has pesado.
//SOlo vale para valores primitivos


console.log(fruta.indexOf('Limon'));


//* .includes(valor)--> devuelve true o false dependiendo de si el valor se encientra en el array o no

console.log(fruta.includes('Manzana'));
console.log(fruta.includes('Piña'));

//-----------------------------------------

//* .reverse --> para inventir un array

console.log(fruta.reverse ());

//OJO porque inverte array original

console.log(fruta);

//De siempre hemos clonado las Array y luego invierto

const frutaInvertido = [...fruta].reverse();

console.log(frutaInvertido);
console.log(fruta);

//Tenemos nuevo metodo -->toReverse () Lo mismo que reverse pero sin mutar, te devuelve un array nuevo.

const frutasNuevoreverse = fruta.toReversed () ;
console.log(fruta);
console.log(frutasNuevoreverse);

//------------------------------------------

const frase ='Con cien cañones por banda';
const palabras = frase.split ('');
console.log(palabras);


//* .join ('Separador') --> pra juntar array y transformar un string usando separadores que le pongas

const stringConGuiones = palabras.join('-');
const stringConAsteriscos = palabras.join('***');
console.log(stringConAsteriscos);
console.log(stringConGuiones);



let palabraCapitalizadas = [];

for (const palabra of palabras) {
    const palabraCapitalizadas = palabra.slice(0,1).toUpperCase()+ palabra.slice(1);
    palabraCapitalizadas.push(palabraCapitalizadas);
}

const stringConEspacios =palabraCapitalizadas.join(' ');
console.log(stringConEspacios);

//Ejemplo de como hacerlo en una funcion

function capitalizarWords (text){
    const words = tetx.slice(' ');
    const capitalizarWords = [];

    for (const word of words) {
        const capitalizarWords = word.slice(0,1).toUpperCase() + word.slice(1);
        capitalizarWords.push(capitalizarWords)
    }
    return capitalizarWords.join(' ');
}

//-------------------------------------------------

// .slice (corteInicial, corteFinal) --> para que te de una copia de un pedazo de trozo

const numbers = [2, 15, -23, 13 , 75, 4, 12];

const trozoDeNumbers = numbers.slice(2,5);
console.log(trozoDeNumbers);

const desdeIndice3hastaFinal = numbers.slice(3);
console.log(numbers);


//* .splice (corteinicial, CantidadCortar)--> para que QUITE de la ARRAy original elementos
//OJO MUTA

numbers.splice(1, 1);
console.log(numbers);


//Ademas te permite METER ELEMENTOS EN ESA POSICIOM, en el tercer parametro

//si quieres cambiar un trozo por algo en el segundo parametro pon un numero

numbers.splice(3, 1, 'Perro')
console.log(numbers);


//si no quieres quitar, pon un 0

numbers.slice(1, 0, 'Gato');

//Nueo Metodo !!!!! toSpliced() --> hace lo mismo PERO NUNCA MUTA EL ORIGINAL, siempre te un un array nuevo modificiad

const nuevoArraysin23 = numbers.toSpliced(4, 1);

console.log(nuevoArraysin23);
console.log(numbers);

/*
    RESUMEN

    Array.isArray()     para saber si una variable tiene un array.

    .push ()
    .pop()
    .unshirf()
    .shift()


    .indexOf()
    .includes()

    .join()

    .reverse()
    .toReversed()

    .slice()
    .splice()
*/













