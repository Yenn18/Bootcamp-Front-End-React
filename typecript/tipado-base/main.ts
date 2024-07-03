//? tipaso base

// podemos topar nuestras variables si nos da la gana usando 2 puntos:

let edad: number = 29;
let nombre:string = 'jenny';
let estacasado: boolean = false;
let valorNulo: null = null;
let valorNofefinido: undefined = undefined;



// no obstante, typecript YA ES SUFICIENTE INTELigente COMO PARA " INFERIR" una varaible qie esta creando demanera literal

let apellido = 'Rodriguez';


// typecript te va a dar error si intnetas cambiarle el tipo de valor  auna varaible durante la ejecucion

/*nombre = 50;
edad= 'quetal';
*/

//----------------------------------------

// arrays
// hay dos maneras de tipar array, y las dos son validas
const frutas: String[] = ['manzana', 'pera', 'platano'];
const frutas1: Array<string> = ['manzana', 'pera', 'platano'];
//otra forma
const nums: Array<number> = [2, 15 -7, 5.48];
const num1: number[] = [2, 15 -7, 5.48];

/*function sumar (a, b){
    return a + b;
}
num1.push(sumar(4, 7));
*/
//----------------------------------
//Any --> es un tipo que solo existe en typecriipst y ue significa que esa variable puede terner ccualquier tipo de dato

let valor: any = 29;
valor = 'hola';
valor = true;

//! esto NUMCA DERBERIA PASAR, no permitas que exiatan tipos any en tu codigo.


//unions --> una variable puede definirle que pueda tener ,as de un tipo de datos usando la barra vertifcal

let hijos: number | null = 5;
//ahora esta variable puede guardar numero o el valor null

hijos = null;
//--------------------------

//enums --> son parecidos a los unios que son varios tipos de datos, los enmuns son varios valores posibles
let role: 'admin' | 'user' | 'boss'  = 'boss';

//----------------------------------
//* FUNCIONES

function sumar (num1: number, nums:number){
return num1 + nums;
}

sumar(5, 7);


// * parametros opcionales?

//primera opcion --> dando valor por defecto
function saludar (nombre: string, apellido:string = ''){
    console.log(`hola, ${nombre}` + apellido ? `${apellido}`: '');
}

saludar ('ivan');


//opcion2 --> con ? puede ser string o underfined a lo que pueda ser opcional

function despedida (nombre: string, apellido?:string) {
   
    console.log(`hola, ${nombre}` + apellido ? `${apellido}`: '');
}

despedida ('ivan');

//*void --> Es cuando una funcion no retorna nada

function buenodias (){
    console.log('buenos dias');
}























