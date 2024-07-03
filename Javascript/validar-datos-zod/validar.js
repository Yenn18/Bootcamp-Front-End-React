
// esquema manual
//nombre = string:
//email = string;
//




//validando manualmente




















import {_z_} from Zod;

// esquemas para zod

// vamos a validar un simple string

const reverseTextSchema = z.string({invalid_type_error : 'tienes que pasar un string'});

function reverseText (text = ''){
   
    const validatedText = reverseTextSchema.parse (text)
    // validar que me pases un string

    return validatedText.split ('').reverse().join('');
}
console.log(reverseText('hola'))
try{
console.log(reverseText(23)); 
}catch (error){
    console.log(error.issues[0].message);
}

// opcion 2 usar safeParse, que no hara throw.

function reverseTextsafe (text = ''){

    //validar que me oases un string
    const algo = reverseTextSchema.safeParse (text);
    console.log(algo);

    if(!sucess){
        console.error(error.issues[0].message);

    }
    return data.split('').reverse().join('');
}
    console.log(reverseTextsafe('em@ail.com'));
    console.log(reverseTextsafe(23));

//------------------------------------


//validar objectos

// paso 1 esquema
    // nombre: string
    //  email: string
    //  edad: number


    const userSchemas = z.object ({
        nombre: string (),
        email: z.string(),
        edad: z.number ()
    });
    const usuario1 = {
        nombre: 'jenny',
        edad: 29,
        email: 'em@ail.com',
        isMarried: true,
    }
const {sucess, data, error} = userSchemas.safeParse(usuario1);

console.log(data);

if (!sucess){
    for (const err of error.issues) {
        console.log(`Error en ${err.path[0]}: ${err.message}`);
    }
}
function mappingZodErrorArray(error){
    const arrayError = {};

}




