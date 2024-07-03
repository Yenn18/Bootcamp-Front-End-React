<<<<<<< HEAD
// propiedades

//pi
console.log(Math.PI);
console.log(Math);

//Metodos

const cuadradode3 = 3 **2;
const cuboDe7 = Math.pow (7,3);

//Raiz cuadrada de algo

const raizDe144 = Math.sqrt(144);
console.log(raizDe144);


//Redondeos de un numero como nos lo han enseñado
console.log('Math.round(5.9999999)-->', Math.round (5.999999));
console.log('Math.round(5,1 -->',Math.round(5,1));
console.log('Math.round(5.5)-->', Math.round(5.5));
console.log('Math.round--> (5.4999-->',Math.round);

//Redondeado SIEMPRE AL ALZA
console.log('Math.ceil(5.999)-->', Math.ceil(5.999));
console.log('Math.ceil (5.1) -->',Math.ceil(5.1));

//REdondo SIEMPRE A LA BAJA
console.log('Math.floor (5.999) -->', Math.floor(5.999));
console.log('object');

// Saber el número MÁS ALTO de una lista de números

console.log('Math.max(-5, 4, 13, -25, 7) -->', Math.max(-5, 4, 13, -25, 7));

// Saber el número MÁS BAJO de una lista de números

console.log('Math.min(-5, 4, 13, -25, 7) -->', Math.min(-5, 4, 13, -25, 7));

//! no funciona con arrays

console.log('Math.max([5, 2, -3]) -->', Math.max([5, 2, -3]));

//* truco Spread operator
const nums = [2, 15, -13, 23, 75, 4, 12];

const numeroMasAlto = Math.max(...nums);
const numeroMasBajo = Math.min(...nums);
console.log(numeroMasAlto);
console.log(numeroMasBajo);

// Generar un numero aleatoria

console.log('Math.random()-->', Math.random());

//Generar un numero entre 1 y 10

console.log('Math.random() * 10 -->',Math.random()*10);
console.log('Math.floor(Math.random() *10) -->', Math.floor(Math.random() *10));

console.log('Math.ceil(Math.random() * 10) -->',Math.ceil(Math.random() * 10));

//Generar un numero random entre uno y otro 

const numeroEntre33y54 = Math.floor(Math.random()*(54 - 33 + 1)+33)
console.log(numeroEntre33y54);

//Ejempo de juego de cara o cruz

const moneda = Math.random();
if (moneda <= 0,499999) {
    console.log('cara');
} else {
    console.log('cruz');
=======
// propiedades

//pi
console.log(Math.PI);
console.log(Math);

//Metodos

const cuadradode3 = 3 **2;
const cuboDe7 = Math.pow (7,3);

//Raiz cuadrada de algo

const raizDe144 = Math.sqrt(144);
console.log(raizDe144);


//Redondeos de un numero como nos lo han enseñado
console.log('Math.round(5.9999999)-->', Math.round (5.999999));
console.log('Math.round(5,1 -->',Math.round(5,1));
console.log('Math.round(5.5)-->', Math.round(5.5));
console.log('Math.round--> (5.4999-->',Math.round);

//Redondeado SIEMPRE AL ALZA
console.log('Math.ceil(5.999)-->', Math.ceil(5.999));
console.log('Math.ceil (5.1) -->',Math.ceil(5.1));

//REdondo SIEMPRE A LA BAJA
console.log('Math.floor (5.999) -->', Math.floor(5.999));
console.log('object');

// Saber el número MÁS ALTO de una lista de números

console.log('Math.max(-5, 4, 13, -25, 7) -->', Math.max(-5, 4, 13, -25, 7));

// Saber el número MÁS BAJO de una lista de números

console.log('Math.min(-5, 4, 13, -25, 7) -->', Math.min(-5, 4, 13, -25, 7));

//! no funciona con arrays

console.log('Math.max([5, 2, -3]) -->', Math.max([5, 2, -3]));

//* truco Spread operator
const nums = [2, 15, -13, 23, 75, 4, 12];

const numeroMasAlto = Math.max(...nums);
const numeroMasBajo = Math.min(...nums);
console.log(numeroMasAlto);
console.log(numeroMasBajo);

// Generar un numero aleatoria

console.log('Math.random()-->', Math.random());

//Generar un numero entre 1 y 10

console.log('Math.random() * 10 -->',Math.random()*10);
console.log('Math.floor(Math.random() *10) -->', Math.floor(Math.random() *10));

console.log('Math.ceil(Math.random() * 10) -->',Math.ceil(Math.random() * 10));

//Generar un numero random entre uno y otro 

const numeroEntre33y54 = Math.floor(Math.random()*(54 - 33 + 1)+33)
console.log(numeroEntre33y54);

//Ejempo de juego de cara o cruz

const moneda = Math.random();
if (moneda <= 0,499999) {
    console.log('cara');
} else {
    console.log('cruz');
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
}