<<<<<<< HEAD
//Extra 1:
// podemos evaluar directamente el valor de la variable sin usar comparadores.

const isConnected = false;
if (isConnected) {
    console.log('Usuario conectado');
    
}else{
    console.log('No conectado');
}

//Extras
// javascript interpreta valores verdaderos y falsos

const value = ''; // false null undefinded 0 '' ;
if (value) {
    console.log('Entra');
}else{
    console.log('No entra');
}

//const nombre = 'jenny'; // igual que string ('jenny'), Number(2), Array(5);

//Extras 3
// Si se utilizar la ! invertimos el valor.

const isMarried = true;
if (!isMarried) {               
    console.log('Vivan los novios');
    
}else{
    console.log('Se te pasa el arroz');
}

// El doble !! sirva para tener un valor booleano de cualquier valor.

console.log(!!5); // true
console.log(!!undefined); //flase


//Extra 4
// Si lo que hay en el if o else si es una linia de ejecucion puedes quitar las llaves.

if (valor === null) {
console.log('Es nulo');
}
//if (valor) 
//    console.log('Es nulo');


//----------------------------------------
//Ambito de las variables

let perra ='Piti';

if (2 ===2) {
    console.log(perra);
    // La variable local se queda dentro
    let otraPerra ='Chloe';
 // Var es una varaible GLOBAL se puede usar en todas partes
    var ultimaPerro= 'Bizcocho';
}
// console.log(otraPerra);

console.log(ultimaPerro);

// Si necesito modificar variables dentro de una bloque y la necesito fuera la creo antes del boque y la modifico dentro y la vuelvo a usar fuera.

let children = 0;
const isPregnant = true;

if (isPregnant) {

    children++;
}
console.log(children);

// Si dentro del bloque creamos una variable y se llama igual que es una global tien preferencia la local.


const Friend ='Carlos';
if (true) {
    let friend ='Xavi';

    friend ='Jenny';
}
console.log(friend);



=======
//Extra 1:
// podemos evaluar directamente el valor de la variable sin usar comparadores.

const isConnected = false;
if (isConnected) {
    console.log('Usuario conectado');
    
}else{
    console.log('No conectado');
}

//Extras
// javascript interpreta valores verdaderos y falsos

const value = ''; // false null undefinded 0 '' ;
if (value) {
    console.log('Entra');
}else{
    console.log('No entra');
}

//const nombre = 'jenny'; // igual que string ('jenny'), Number(2), Array(5);

//Extras 3
// Si se utilizar la ! invertimos el valor.

const isMarried = true;
if (!isMarried) {               
    console.log('Vivan los novios');
    
}else{
    console.log('Se te pasa el arroz');
}

// El doble !! sirva para tener un valor booleano de cualquier valor.

console.log(!!5); // true
console.log(!!undefined); //flase


//Extra 4
// Si lo que hay en el if o else si es una linia de ejecucion puedes quitar las llaves.

if (valor === null) {
console.log('Es nulo');
}
//if (valor) 
//    console.log('Es nulo');


//----------------------------------------
//Ambito de las variables

let perra ='Piti';

if (2 ===2) {
    console.log(perra);
    // La variable local se queda dentro
    let otraPerra ='Chloe';
 // Var es una varaible GLOBAL se puede usar en todas partes
    var ultimaPerro= 'Bizcocho';
}
// console.log(otraPerra);

console.log(ultimaPerro);

// Si necesito modificar variables dentro de una bloque y la necesito fuera la creo antes del boque y la modifico dentro y la vuelvo a usar fuera.

let children = 0;
const isPregnant = true;

if (isPregnant) {

    children++;
}
console.log(children);

// Si dentro del bloque creamos una variable y se llama igual que es una global tien preferencia la local.


const Friend ='Carlos';
if (true) {
    let friend ='Xavi';

    friend ='Jenny';
}
console.log(friend);



>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
