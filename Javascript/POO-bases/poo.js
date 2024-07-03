class CocheOpel {
    marca = 'Opel';

    //this --> solo se puede utilizar en metodos

    constructor(modelo, puertas = 3) {
        // cada vez que se crea una instancia se ejecuta el contructor()
        //clg ('constructor:', modelo);
        this.modelo = modelo;
        this.puertas = puertas;
    }

    arrancar() {
        console.log(`Runn. El Coche ${this.marca} ${this.modelo} ha arrancado`);
    }
}

const coche1={
    marca: 'Opel',
    arrancar: function(){
        console.log('runn');
    }
}
const coche2 = {
    marca: 'Opel',
    arrancar: function(){
        console.log('Runn');
    }
}


// instanciar una clase
const coche3 = new CocheOpel('Corsa');
const coche4 = new CocheOpel('Zafira', 5);

//console.log(coche1);
//console.log(coche2);
console.log(coche3); // Para verificar que coche3 se creó correctamente
console.log(coche4);




//coche1.arrancar ();
//coche2.arrancar();
coche3.arrancar(); // Debería imprimir 'Runn'
coche4.arrancar(); 
