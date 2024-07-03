<<<<<<< HEAD
//*for ...of
    //No es universal no vale para cualquier caso, empieza en el primer elemento
    //Siempre termina en el ultimo
    //Siempre va 1 en 1.

    const frutas =['manzana', 'pera','Melon','sandia'];
    const frase ='Me encanta javascript';

    //Frutas[i]
    for (const fruta of frutas) {
     console.log(fruta);   
    }

    for (const letra of frase) {
        console.log(letra);
    }

const nums = [2, 15, -13, 23, 75, 4, 12];

for (let i = 0; i <nums.length; i ++){
    if(nums[i] % 2 === 0){
    nums[i] *=0;
    }
}

console.log(nums);

const nums2 = [2, 15, -13, 23, 75, 4, 12];
 for (let num of nums2) {
    if(num % 2 === 0){
        num *=0;
    }
    
}
console.log(nums2);  // con el for of no se a mutado el original


//---------------------------------------

// for...in
    //No es universal no vale para cualquier caso, empieza en el primer elemento
    //Siempre termina en el ultimo
    //Siempre va 1 en 1.

console.log('for.. in fruta');
for(const index in frutas){
    console.log(index);
}

console.log('for.. in nums');
for (const index in nums) {
    console.log(index, nums[index]);
}

//------------------------------------------

//while
//Mientras se cumpla la conficion no dejara de dar vueltas
let i = 0;
while (1 < 5) {
    console.log(1);
    i++
}

let password = prompt('Dime contraseña');
while (password !== '1234') {
    password= prompt ('Error vuelve a intentarlo')
    
} 

//------------------------------

// do y while
//Extra podemos romper el bucle uando la cluasula continue o break;

let numero = 0;

while (true) {
    numero++;

    if (numero % 2 === 0) { 
    continue;
    }
     console.log(numero);

    if (numero === 11) {
        break;
    }
}

const numeroUsuario = 33;
let esPrimo = true;
for (let i = 2; i < numeroUsuario; i++) {
    if(numeroUsuario % i === 0)
        esPrimo = true;
    
}
console.timeEnd();
=======
//*for ...of
    //No es universal no vale para cualquier caso, empieza en el primer elemento
    //Siempre termina en el ultimo
    //Siempre va 1 en 1.

    const frutas =['manzana', 'pera','Melon','sandia'];
    const frase ='Me encanta javascript';

    //Frutas[i]
    for (const fruta of frutas) {
     console.log(fruta);   
    }

    for (const letra of frase) {
        console.log(letra);
    }

const nums = [2, 15, -13, 23, 75, 4, 12];

for (let i = 0; i <nums.length; i ++){
    if(nums[i] % 2 === 0){
    nums[i] *=0;
    }
}

console.log(nums);

const nums2 = [2, 15, -13, 23, 75, 4, 12];
 for (let num of nums2) {
    if(num % 2 === 0){
        num *=0;
    }
    
}
console.log(nums2);  // con el for of no se a mutado el original


//---------------------------------------

// for...in
    //No es universal no vale para cualquier caso, empieza en el primer elemento
    //Siempre termina en el ultimo
    //Siempre va 1 en 1.

console.log('for.. in fruta');
for(const index in frutas){
    console.log(index);
}

console.log('for.. in nums');
for (const index in nums) {
    console.log(index, nums[index]);
}

//------------------------------------------

//while
//Mientras se cumpla la conficion no dejara de dar vueltas
let i = 0;
while (1 < 5) {
    console.log(1);
    i++
}

let password = prompt('Dime contraseña');
while (password !== '1234') {
    password= prompt ('Error vuelve a intentarlo')
    
} 

//------------------------------

// do y while
//Extra podemos romper el bucle uando la cluasula continue o break;

let numero = 0;

while (true) {
    numero++;

    if (numero % 2 === 0) { 
    continue;
    }
     console.log(numero);

    if (numero === 11) {
        break;
    }
}

const numeroUsuario = 33;
let esPrimo = true;
for (let i = 2; i < numeroUsuario; i++) {
    if(numeroUsuario % i === 0)
        esPrimo = true;
    
}
console.timeEnd();
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
console.log(esPrimo);