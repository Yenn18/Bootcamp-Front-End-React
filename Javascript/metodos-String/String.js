<<<<<<< HEAD
// Metodos String

const frase= 'Con diez cañones por banda ...';

//lengt --> longitud del texto.

console.log(frase.length); 28

//Metodos toupperCase() y .tolwerCase();

const fraseMayscula = frase.toUpperCase();
console.log(fraseMayscula); 

const fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);

console.log(frase);

// .trim() --> para quitar espacios en blanco delante y detras

const palabra = '   hola    ';
const palabrainEspacios = palabra.trim();
console.log(palabrainEspacios); 'hola';

//indexOf ('substring') --> devuelve el indice del trozo del texto que le has pasado, si no lo encuentra devuelve -1;

console.log(frase.indexOf('cañon'));  //posicion 9
console.log(frase.indexOf('Zapato')); // devuelve -1.

//simeore da la primera que encuentra
console.log(frase.indexOf('n'));

//si quieres la ultima, puedes usar .lastindexOf;
console.log(frase.lastIndexOf('n'));

//--------------------------------

//.includes('substring') --> simplemente te da true o false si encuentra o el tro de texto que le has pasado

console.log(frase.includes('cañon'));
console.log(frase.includes ('zapato'));

//.slice(inicio corte, final corte) --> devuelve el pedazo del texto, sin modificar el original.

const trozoFrase1 = frase.slice(4);
console.log(trozoFrase1);

const trozoFrase2 = frase.slice (4, 10);
console.log(trozoFrase2);

//Empieza a contar desde atras en negativo.
const trozoFrase3 = frase.slice (4, -5);
console.log(trozoFrase3);

//.split('Separador') --> geran una nueva ARRAy apartir del texto dado y separa el texto segun el separador que lel hayas dado.

const arrayPalabra = frase.split (' ');
console.log(arrayPalabra);
console.log(arrayPalabra.length);

const arrayLetras = frase.split (''); 
console.log(arrayLetras);

=======
// Metodos String

const frase= 'Con diez cañones por banda ...';

//lengt --> longitud del texto.

console.log(frase.length); 28

//Metodos toupperCase() y .tolwerCase();

const fraseMayscula = frase.toUpperCase();
console.log(fraseMayscula); 

const fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);

console.log(frase);

// .trim() --> para quitar espacios en blanco delante y detras

const palabra = '   hola    ';
const palabrainEspacios = palabra.trim();
console.log(palabrainEspacios); 'hola';

//indexOf ('substring') --> devuelve el indice del trozo del texto que le has pasado, si no lo encuentra devuelve -1;

console.log(frase.indexOf('cañon'));  //posicion 9
console.log(frase.indexOf('Zapato')); // devuelve -1.

//simeore da la primera que encuentra
console.log(frase.indexOf('n'));

//si quieres la ultima, puedes usar .lastindexOf;
console.log(frase.lastIndexOf('n'));

//--------------------------------

//.includes('substring') --> simplemente te da true o false si encuentra o el tro de texto que le has pasado

console.log(frase.includes('cañon'));
console.log(frase.includes ('zapato'));

//.slice(inicio corte, final corte) --> devuelve el pedazo del texto, sin modificar el original.

const trozoFrase1 = frase.slice(4);
console.log(trozoFrase1);

const trozoFrase2 = frase.slice (4, 10);
console.log(trozoFrase2);

//Empieza a contar desde atras en negativo.
const trozoFrase3 = frase.slice (4, -5);
console.log(trozoFrase3);

//.split('Separador') --> geran una nueva ARRAy apartir del texto dado y separa el texto segun el separador que lel hayas dado.

const arrayPalabra = frase.split (' ');
console.log(arrayPalabra);
console.log(arrayPalabra.length);

const arrayLetras = frase.split (''); 
console.log(arrayLetras);

>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
