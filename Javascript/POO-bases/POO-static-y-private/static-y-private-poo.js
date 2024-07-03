//Stactic

class Persona {  // Las propiedades siempre la primera L en mayuscula
    piernas = 2;
    static brazos = 2;


    constructor(nombre){
        this.nombre = nombre
    }
}


// se puede lanzar en metodos y instancias static

const p1 = new Persona ('jenny');

console.log(p1);

console.log(pi.piernas);
console.log(pi.brazos); // no se le da a los objetos nuevos
console.log(Persona.brazos);  // solo puedo ver esa propiedad si la llamo usando la clase

console.log(Math.PI);

class MyMath {
    static PI =  3.141592653589793;

    static random(){
        return Math.random()
    }
}


//-------------------------------------------------------


//PRIVATE con #


class Coche {

    #marca;
    #modelo;
    #puertas;
    

    constructor (marca, modelo, puertas){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#puertas = puertas; 

    }
    info (){
       console.log(` 
        INFO COCHE:
        Marca:${this.#marca}
        Modelo:${this.#modelo}
        Puertas:${this.#puertas}
        `);
    }  

        // en privado nose puede ni leer, ni modificar solo dentro 

        getMarca () {
            return this.#marca;
          }
        
          setMarca (nuevaMarca) {
            const marcasPermitidas = ['Seat', 'Opel', 'Mercedes'];
        
            if (typeof nuevaMarca !== 'string') return;
        
            if (!marcasPermitidas.includes(nuevaMarca)) return;
            
            this.#marca = nuevaMarca;
          }
        
        
          get marca () {
            return this.#marca;
          }
        
          set marca (nuevaMarca) {
            const marcasPermitidas = ['Seat', 'Opel', 'Mercedes'];
        
            if (typeof nuevaMarca !== 'string') return;
        
            if (!marcasPermitidas.includes(nuevaMarca)) return;
            
            this.#marca = nuevaMarca;
          }
}
const c1 = new Coches ('Seat', 'Ibiza', 5);

//console.log(c1.modelo);

//console.log(c1.#marca);
//c1.#marca = 'zapato';


c1.info();

const marca = c1.getMarca();
console.log(marca);
c1.setMarca('Mercedes');
console.log(c1);



//Genera una propiedad del objeto


//Utilizando get y set

console.log(c1.marca);
c1.marca = 'Mercedes';
console.log(c1);