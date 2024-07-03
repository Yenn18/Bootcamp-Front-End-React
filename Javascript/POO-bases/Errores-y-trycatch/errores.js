// errores

const miError = new Error();
console.dir(miError.stack);
console.dir(miError.message);
console.dir(miError)


class Error {
    name = 'Error';

    constructor (message){
        this.mesage = message;
        this.stack = 'string de stack' //whatever
    }

}


// como implememtnar los errores


function sumar (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        const error = new Error ('Tienes que pasar un number')
        throw error; // se corta al ejecucion de esta funcion
        
    }


    return a + b;
}

//console.log(sumar4y5);

try{
    
    const sumar4y5 = sumar (5, 4);
    console.log(sumar4y5);




}catch (error){

    console.log('Habido un error');
    console.log(error);

}


// Hay varios erroes y tambien podemos crear nuevis tipos de error

const nombre = 'Jenny';
console.log(apellido);

// clg (apellido)   // Referenceerror


const edad = null;
console.log(edad.length);

//clg(edad.length) // TypeError

class HttpError  extends Error {
    constructor(mesage, statusCode){
        super(mesage);
        this.statusCode = statusCode;
    }
}

const error1 = new HttpError();
console.dir (error1);