<<<<<<< HEAD
const nombre = 'Ivan', 
edad = 37, 
isMarried = true;


const frutas = ['🍎', '🍐', '🍌', '🍇'];

const platano = {
  cantidad: 3,
  procedencia: 'Canarias',
  tieneMotitas: true
};


console.log(nombre.toString());
console.log(edad.toString());
console.log(isMarried.toString());


//! los objetos y arrays no se convierten bien, JavaScript no sabe representar bien ninguno de los dos como si fuera un JSON

console.log(frutas.toString());
console.log(platano.toString());

//* solución --> Usamos el objeto global JSON y sus dos métodos .stringify() y .parse() para hacer la conversión  JSON ↔ JavaScript


const frutasFormatoJSON = JSON.stringify(frutas);
console.log(frutasFormatoJSON);

const platanoFormatoJSON = JSON.stringify(platano);
console.log(platanoFormatoJSON);


//* El paso inverso es si tengo un string que me viene en formato JSON quiero "parsearlo" a formato JavaScript

const platanoFormatoJavaScript = JSON.parse(platanoFormatoJSON);
console.log(platanoFormatoJavaScript.cantidad);


//* EXTRA! El método stringify, te permite hacer que el string resultante tenga saltos de línea

const platanoFormatoJSONConSaltos = JSON.stringify(platano, null, 4);
=======
const nombre = 'Ivan', 
edad = 37, 
isMarried = true;


const frutas = ['🍎', '🍐', '🍌', '🍇'];

const platano = {
  cantidad: 3,
  procedencia: 'Canarias',
  tieneMotitas: true
};


console.log(nombre.toString());
console.log(edad.toString());
console.log(isMarried.toString());


//! los objetos y arrays no se convierten bien, JavaScript no sabe representar bien ninguno de los dos como si fuera un JSON

console.log(frutas.toString());
console.log(platano.toString());

//* solución --> Usamos el objeto global JSON y sus dos métodos .stringify() y .parse() para hacer la conversión  JSON ↔ JavaScript


const frutasFormatoJSON = JSON.stringify(frutas);
console.log(frutasFormatoJSON);

const platanoFormatoJSON = JSON.stringify(platano);
console.log(platanoFormatoJSON);


//* El paso inverso es si tengo un string que me viene en formato JSON quiero "parsearlo" a formato JavaScript

const platanoFormatoJavaScript = JSON.parse(platanoFormatoJSON);
console.log(platanoFormatoJavaScript.cantidad);


//* EXTRA! El método stringify, te permite hacer que el string resultante tenga saltos de línea

const platanoFormatoJSONConSaltos = JSON.stringify(platano, null, 4);
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
console.log(platanoFormatoJSONConSaltos);