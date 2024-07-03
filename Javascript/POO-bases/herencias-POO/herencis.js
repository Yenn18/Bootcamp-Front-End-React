class GenteDeLaEscuela {
    constructor(nombre, email){
        this.nombre = nombre;
        this.emai = email;
        this.curso = curso;
    }
    info (){
        console.log(`${this.nombre} y su email ${this.emai}`);
        return info;
    }
}

class Profeso extends GenteDeLaEscuela{

    isAdmin = true;

    constructor(nombre, email, curso){
        super(nombre, email);
        this.curso = curso;
    }
   
}

const Ivan = new Profesor('Ivan','ivan@gmail.com', 'Javascript')
console.log(ivan);
const infoIvan = ivan.info()
console.log(infoIvan);


class Alumno extends GenteDeLaEscuela {

    isCertified = false;


constructor(nombre, email){
     super(nombre, email);

    }

info(){
    const superInfo = super.info();
    const alumnoInfo = 'ALIMNO:'+ superInfo;
    return alumnoInfo

    }

}
const davide = new Alumno('Davide', 'davide@gmail.com');
const infoDavide = davide.info();
console.log(infoDavide);