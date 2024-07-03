const frutas = [
    {
      nombre: 'plátano',
      procedencia: 'Canarias',
      cantidad: 5,
      emoticono: '🍌'
    },
    {
      nombre: 'manzana',
      procedencia: 'Marruecos',
      cantidad: 2,
      emoticono: '🍎'
    },
    {
      nombre: 'uvas',
      procedencia: 'La Rioja',
      cantidad: 10,
      emoticono: '🍇'
    },
    {
      nombre: 'aguacate',
      procedencia: 'Perú',
      cantidad: 0,
      emoticono: '🥑'
    },
    {
      nombre: 'pera',
      procedencia: 'Toledo',
      cantidad: 7,
      emoticono: '🍐'
    },
    {
      nombre: 'sandía',
      procedencia: 'Marruecos',
      cantidad: 0,
      emoticono: '🍉'
    }
  ]
  
//* Filtra en un array nuevo todas las frutas que tengan más de 5 unidades
console.log(frutas.filter(fruta => { return fruta.cantidad > 5}));
console.log(frutas.filter(fruta => fruta.cantidad > 5));


//* Filtra todas las frutas que sean de Marruecos
console.log(frutas.filter(fruta => fruta.procedencia.toLowerCase() === 'marruecos'));
  
  //* Encuentra la fruta que tenga menos de 5 unidades y luego imprime su emoticono en consola
const frutasFiltradas = frutas.filter(fruta => fruta.filter <5);
frutasFiltradas.forEach (fruta => console.log(fruta.emoticono));

  //* Encuentra la fruta que venga de Canarias y súmale 2 a su cantidad

  frutas.map(fruta => {
    if (fruta.procedencia === 'Canarias') {
        fruta.cantidad += 2;
    }
    return fruta;
});

console.log(frutas);


  const peliculas = [
    {
      titulo: 'El Señor de los Anillos',
      genero: ['Aventuras', 'Acción'],
      duracion: 250,
      year: 2001,
      director: 'Peter Jackson'
    },
    { 
      titulo: 'Harry Potter', 
      genero: ['Aventuras', 'Fantasía'], 
      duracion: 151, 
      year: 2001 , 
      director: 'Chris Columbus' 
    },
    { 
      titulo: 'Troya', 
      genero: ['Histórica', 'Acción'], 
      duracion: 132, 
      year: 2004 , 
      director: 'Wolfgang Petersen' 
    },
    { 
      titulo: 'Iron Man', 
      genero: ['Ciencia Ficción', 'Acción'], 
      duracion: 126,
      year: 2008 , 
      director: 'Jon Favreau' 
    },
    { 
      titulo: 'E.T.', 
      genero: ['Aventuras', 'Ciencia Ficción'], 
      duracion: 115, 
      year: 1982 , 
      director: 'Steven Spielberg' 
    },
    { 
      titulo: 'Los Goonies', 
      genero: ['Aventuras', 'Comedia'], 
      duracion: 114, 
      year: 1985 , 
      director: 'Richard Donner' 
    },
    { 
      titulo: 'Algo Pasa con Mary', 
      genero: ['Comedia', 'Comedia Romántica'], 
      duracion: 119, 
      year: 1998 , 
      director: 'Bobby Farrelly' 
    },
    { 
      titulo: 'Hook',
      genero: ['Aventuras', 'Fantasía'], 
      duracion: 142, 
      year: 1991 , 
      director: 'steven Spielberg' 
    }
];
//* 1.- Vamos a imprimir todas los títulos de las películas con un número delante. 

/*javascript
// 1.- El Señor de los Anillos
// 2.- Harry Potter
// ...
*/
peliculas.forEach((pelicula, index) => {
    console.log(`${index + 1}. ${pelicula.titulo}`);
});

//* 2.- Filtra todas las películas que sean más modernas que el año 2000 y imprime el array por consola
const peliculasModernas = peliculas.filter(pelicula => pelicula.year > 2000);
console.log(peliculasModernas);


//* 5.- Vamos a MODIFICAR cada duración de las películas y sumarle a todas 100 minutos
peliculas.forEach(pelicula => pelicula.duracion += 100);

//* 6.- Vamos a AÑADIR a todas las películas la propiedad `rating` que empezará con el valor 5 excepto 'Hook' que tendrá un 10
peliculas.forEach(pelicula => {
    pelicula.rating = pelicula.titulo === 'Hook' ? 10 : 5;
});

//* 7.- Crea un array con todos los nombres de los directores en MAYUSCULAS (solo los nombres)
const directoresEnMayusculas = peliculas.map(pelicula => pelicula.director.toUpperCase());
console.log(directoresEnMayusculas);

//* 8.- Crea un array con solo los años de las películas (solo los números) y luego adivina cuál es la película más antigua y la más moderna (RECUERDA EL OBJETO MATH)
const years = peliculas.map(pelicula => pelicula.year);
const peliculaMasAntigua = Math.min(...years);
const peliculaMasModerna = Math.max(...years);
console.log('Película más antigua:', peliculaMasAntigua);
console.log('Película más moderna:', peliculaMasModerna);

//* 9.- Ordena las películas de más antíguas a más modernas
console.log(peliculas.toSorted((peliA, peliB) => peliA.year - peliB.year));
console.log(peliculas.toSorted((peliA, peliB) => peliB.year - peliA.year));

//* 10.- Ordena las películas por el nombre del director de forma alfabética A-Z
const peliculasOrdenadasPorDirector = [...peliculas].sort((a, b) => a.director.localeCompare(b.director));
console.log(peliculasOrdenadasPorDirector);


//* 11.- ¿Hay alguna película que Terror en el array? Demuéstralo.
const hayTerror = peliculas.some(pelicula => pelicula.genero.includes('Terror'));
console.log('¿Hay alguna de Terror?:', hayTerror);

//* 12.- ¿Duran TODAS las películas más de 2 horas?
const todasMasDeDosHoras = peliculas.every(pelicula => pelicula.duracion > 120);
console.log('!Duran todas las películas más de 2 horas!:', todasMasDeDosHoras);










































