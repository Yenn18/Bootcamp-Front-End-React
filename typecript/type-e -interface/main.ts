// type y interface

//interface --> solo funciona para objectos y clases

interface Tarea {
    id: number;
    task: string;
    isCompleted: boolean;

}



const toDo: Tarea = {
    id: 1,
    task: 'estudiar typescript',
    isCompleted: true,
}

//toDo.id = 'hola'; // no permitido

// Parametros opcionales --> ?

interface User {
    id:number;
    username: string;
    email?: string;
}

const user1: User = {
    id:2,
    username: 'jrg',
}


// podemos externder interfaces usando extends

// siempre que quieras tener otro tipo de datos que sea muy parecido a otro, podemos externder una unterface de otra


//interface Admin {
 //   id: number;
 //   username: string;
 //   email?: string;
 //   isAdmin: boolean;
//}

interface Admin extends User {
    isAdmin: boolean;
}

const admin1: Admin = {
    id: 1,
    username: 'Jenny',
    email: 'email@.com',
    isAdmin: true

}

// Ahora ya puedo decirle a una array un ehemeplo que todos sus elementos sean de tipo User

const users: User [] = [];

const newUser = {
    id: 3,
    username: 'Carlos'
}

users.push(newUser);



// es mas ahora cuando uso cualquier metodo de javascript me ayuda con el topado de cada cosa.

const arrayfiltrado = users.filter((user)=> user.username.includes('i'))

//-----------------------------------

//type

type Gender = 'male' | 'female' | 'non-binary';

interface Perro {
    name: string;
    raza: string;
    gender: Gender;
}


const perro1: Perro = {
    name : 'chloe',
    raza: 'meztiza',
    gender: 'female'
}

interface Gato {
    name: string;
    raza: string;
    gender: 'male'| 'female';
}

// pero puedes crear tipos de objecto usando type

type Pajaro = {
    name: string;
    raza: string;
    gender: Gender;
}

const pajaro1: Pajaro = {
    name: 'Loki',
    raza: 'agaporni',
    gender: "male"
}


// tambien podemos externder tupes, usando --> &

type Pescado = Perro & {
    itSwins: boolean
}

const fish1: Pescado = {
    name: 'wanda',
    raza: 'goldfish',
    gender: "female",
    itSwins: false
}


// Clases

interface Coche {
    marca: string;
    modelo: string;
    puertas: number;
    info: () => void;
    getMarca: () => string;
    setMarca: (newMarca: string) => void;
}
 class Coche /*implements Coche*/ {

    // en typecripst es obligatoria definir le tipo de cada propiedad antes del contructor
    marca: string;
    modelo: string;
    puertas: number;

    constructor (marca: string, modelo: string,puertas: number){
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;

    }
    info () {
        console.log(`Es un coche ${this.marca} ${this.modelo} y tiene  ${this.puertas} puertas`);
    }
    getMarca (){
        return  this.marca;
    }
    setMarca (newMarca: string){
        this.marca = newMarca;
    }
}



 const c1 = new Coche('opel', 'Zafiro', 4);















