<<<<<<< HEAD
// Array

const nombres = ['Jenny','Ruben'];
console.log(nombres);


//Accede a valores de la array
console.log(nombres['0']); 'Jenny'
console.log(nombres['1']); 'Ruben'
console.log(nombres[50]); 'undefined'

// Todos loa rray tiene la propiedad length igual que lo string
console.log(nombres.length);  2

//modifica un valor del array
nombres[1] = 'Davide';
console.log(nombres);

//añadir elemtos que no existen
nombres[2] ='jenny';
console.log(nombres);

nombres[10] = 'Guillem';
console.log(nombres);

//añadir algo al final de la array.length
nombres[nombres.length] ='Brian';
nombres[nombres.length] = 'Ruth';
console.log(nombres);

//----------------------------------------


//los string funcionan parecido a los array

const palabra = 'Zapato';
console.log(palabra[2]);
palabra[2]= 'W'; //!no funciona
console.log(palabra);

//----------------------------------

let valor1 = 23;
let valor2 = valor1; //guarda una copia del valor1 los valores primitivos.

valor1 = 'hola';

console.log(valor1,valor2);


const arr1= [1,2]; // 0x123
const arr2= arr1;

arr1 [1] = 'Manzana'

console.log(arr1,arr2);

//Como duplico un array sin modificar el original? --> spread operator.

//spread operator
const arr3 =[...arr1];
console.log(arr3);

//.concat()
const arr4 = arr1.concat(arr2);
console.log(arr4);

arr2[0]= 'Pera';

console.log(arr1);
console.log(arr2);
console.log(arr3);


console.log([...arr1,'Chica',...arr2]);

//ESto no duplica arrays de forma profunda.


const numero1 =[1,2,3,[4,5]];
const numero2 = [...numero1];

numero2[0]='Ambulacia';
numero2[3][0]='Coche';

console.log(numero1);
console.log(numero2);







=======
// Array

const nombres = ['Jenny','Ruben'];
console.log(nombres);


//Accede a valores de la array
console.log(nombres['0']); 'Jenny'
console.log(nombres['1']); 'Ruben'
console.log(nombres[50]); 'undefined'

// Todos loa rray tiene la propiedad length igual que lo string
console.log(nombres.length);  2

//modifica un valor del array
nombres[1] = 'Davide';
console.log(nombres);

//añadir elemtos que no existen
nombres[2] ='jenny';
console.log(nombres);

nombres[10] = 'Guillem';
console.log(nombres);

//añadir algo al final de la array.length
nombres[nombres.length] ='Brian';
nombres[nombres.length] = 'Ruth';
console.log(nombres);

//----------------------------------------


//los string funcionan parecido a los array

const palabra = 'Zapato';
console.log(palabra[2]);
palabra[2]= 'W'; //!no funciona
console.log(palabra);

//----------------------------------

let valor1 = 23;
let valor2 = valor1; //guarda una copia del valor1 los valores primitivos.

valor1 = 'hola';

console.log(valor1,valor2);


const arr1= [1,2]; // 0x123
const arr2= arr1;

arr1 [1] = 'Manzana'

console.log(arr1,arr2);

//Como duplico un array sin modificar el original? --> spread operator.

//spread operator
const arr3 =[...arr1];
console.log(arr3);

//.concat()
const arr4 = arr1.concat(arr2);
console.log(arr4);

arr2[0]= 'Pera';

console.log(arr1);
console.log(arr2);
console.log(arr3);


console.log([...arr1,'Chica',...arr2]);

//ESto no duplica arrays de forma profunda.


const numero1 =[1,2,3,[4,5]];
const numero2 = [...numero1];

numero2[0]='Ambulacia';
numero2[3][0]='Coche';

console.log(numero1);
console.log(numero2);







>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
