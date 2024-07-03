<<<<<<< HEAD
//Bucles javascript

//Son estructuras de los datos que sirven para:

    //1 para repetir cogido un numero de veces.
    //2 para recorrer elementos ITERABLES(que pueden ser recorridos(array,string,objetos));

//*for

//3 sentencias separadas por punto y coma.
    //inicializa las variables que necesita.
    //Condicion que mientras se cumpla, repetira el bucle.
 for (let variable = 1; variable < 5; variable += 1 ) {
    console.log('hola');
 }

 //Normalmente lo escribimos con la variable llamada

for (let i = 0; i <5; i++){
    console.log('Adios');
}

for (let i = 1; i <=5; i++){
    console.log(i);
}
//Para recorret cualquier iterable usaremos esa variable que tiene numero correlativos

const frutas = ['manzana','Pera','Platano','Cereza','Naranja','Melon'];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//!Siempre que veas array [] piensa que eso vale cada elemento del array en cada vuelta del bucle

for (let i = 0; i< frutas.length; i++) {
    console.log(frutas[1]);
    
}

//tambien se lo puede

const frase = 'Me gusta javascript';

for(let i = 0; i < frase.length; i++){
    console.log(frase[i]);

}
//podemos debuggerar en javascript --> debuggear

//debugger

for(let i = 0; i < frase.length; i++){
    console.log(frase[i]);
}
//---------------------------------

//Ejemplo

//Dado el siguiente array numero, guarsa en un nuev arrat todo los numero que sean pares.

const numeros = [2, 15, -13, 23, 75, 4, 12]

const pares = [];

for ( let i = 0; i < numeros.length; i++){
    const numero = numeros[i]

    if (numero % 2 === 0){

        pares[pares.length =numero];
    }
}
console.log(pares);




=======
//Bucles javascript

//Son estructuras de los datos que sirven para:

    //1 para repetir cogido un numero de veces.
    //2 para recorrer elementos ITERABLES(que pueden ser recorridos(array,string,objetos));

//*for

//3 sentencias separadas por punto y coma.
    //inicializa las variables que necesita.
    //Condicion que mientras se cumpla, repetira el bucle.
 for (let variable = 1; variable < 5; variable += 1 ) {
    console.log('hola');
 }

 //Normalmente lo escribimos con la variable llamada

for (let i = 0; i <5; i++){
    console.log('Adios');
}

for (let i = 1; i <=5; i++){
    console.log(i);
}
//Para recorret cualquier iterable usaremos esa variable que tiene numero correlativos

const frutas = ['manzana','Pera','Platano','Cereza','Naranja','Melon'];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//!Siempre que veas array [] piensa que eso vale cada elemento del array en cada vuelta del bucle

for (let i = 0; i< frutas.length; i++) {
    console.log(frutas[1]);
    
}

//tambien se lo puede

const frase = 'Me gusta javascript';

for(let i = 0; i < frase.length; i++){
    console.log(frase[i]);

}
//podemos debuggerar en javascript --> debuggear

//debugger

for(let i = 0; i < frase.length; i++){
    console.log(frase[i]);
}
//---------------------------------

//Ejemplo

//Dado el siguiente array numero, guarsa en un nuev arrat todo los numero que sean pares.

const numeros = [2, 15, -13, 23, 75, 4, 12]

const pares = [];

for ( let i = 0; i < numeros.length; i++){
    const numero = numeros[i]

    if (numero % 2 === 0){

        pares[pares.length =numero];
    }
}
console.log(pares);




>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
