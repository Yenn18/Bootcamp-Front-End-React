//funciones de primera clase o orden superir
// funciones que recibe como parametro otra funcion o funciones que retornan funcion

//function nof (fn) {} 


//function nof (){
    //return () =>{}
//}



function saluda (nombre = 'amig@'){
    console.log('hola');
}


for(let i = 1; 1 <=5; i++){
    console.log('hola');
}


for(let i = 1; 1 <=5; i++){
    saluda ('jenny');

}

function imprimerAlgo5Veces(dato){
    for(let i =1 ; i <=5; i++){
        console.log(dato);
    }
}

imprimerAlgo5Veces('5');

function doblarAlgo5Veces (numero){
    for( let i = 1; i <=5; i++){
        numero +=2;
    }
    console.log(numero);
}

doblarAlgo5Veces(2);

function cincoVecesLoQueQuieras (fn){
    for(let i =1; i <=5; i++){
        // como paso aqui linias de cofigo
        
        fn();
    
    }

}
cincoVecesLoQueQuieras(saluda);
cincoVecesLoQueQuieras(function () {
    console.log('Manzana');
})
cincoVecesLoQueQuieras(()=>{
console.log('pera');
})



let valor = 2;

cincoVecesLoQueQuieras( () =>{valor *=2});

console.log(valor);

// si esto lo lleva a algo util de verdad ... omo recorrecr un array ...

const fruta = ['manzana','pera', 'platano'];


function imprimiFrutasUnaPorUna(fruta, fn){
    for (let i =0; i < fruta.length; i++){
        console.log(fruta[i]);
        // Aqui quiero hacer lo que me de la ganas en cada ocasion
    }
}
imprimiFrutasUnaPorUna()

const nums = [2, 15, -13, 23, 75, 4, 12];

function multiplicarPorDosUnoPorUno (arrNums) {
    for (let i = 0; i < arrNums.length; i++) {
      arrNums[i] *= 2;
    }
}

multiplicarPorDosUnoPorUno(nums);
console.log(nums);


function recorredoraDeArrays (array, fn) {
    for (let i = 0; i < array.length; i++) {
        // aquí quiero hacer LO QUE ME DE LA GANA EN CADA OCASIÓN
        fn();
    }
}

recorredoraDeArrays(nums, () => { console.log('recorriendo nums'); });
recorredoraDeArrays(frutas, () => { console.log('recorriendo frutas'); });

// molaria que en cada ejercicion del callback, este tuviera 

function recorredoraDeArraysExtra (array, fn) {

    for (let i = 0; i < array.length; i++) {
  
      fn(array[i], i, array);
  
    }
  }
  
  const pelis = ['Harry Potter', 'Memento', 'Robocop'];
  
  recorredoraDeArraysExtra(frutas, (fruta) => { console.log(fruta) })
  recorredoraDeArraysExtra(nums, (num) => { console.log(num) })
  recorredoraDeArraysExtra([4, 5, 6], () => { console.log('456') })
  
  recorredoraDeArraysExtra(pelis, (peli, index) => { 
    console.log(`Película ${index + 1}: ${peli}`)
  });
  
  
  //* esto es lo mismo que una función (método) que YA TENEMOS EN JAVASCRIPT que es forEach
  
  console.log('For Each');
  
  // pelis.forEach(() => {});
  // pelis.forEach(function () {});
  // pelis.forEach(saludo);
  
  pelis.forEach(() => console.log('peli forEach'));
  pelis.forEach((valor) => console.log(`peli: ${valor}`));
  pelis.forEach((valor, i) => console.log(`peli ${i + 1}: ${valor}`));
  pelis.forEach((_, i) => console.log(`peli ${i + 1}`));