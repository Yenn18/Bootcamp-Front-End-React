<<<<<<< HEAD
function throwConfetti() {
    confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.7 },
        colors: ['#040404', '#880FD6', 'F02FD5'],  // Negro, lila, Rosa.
        shapes: ['circle', 'square']           // Formas de los confetis
    });
}
document.getElementById('confettiButton').onclick = throwConfetti; // Con el valor documento.getEementbyId metemos el elemento id para hacer que el js cuando apretemos al boton salten confetis.

function playSequence() {
    // Creamos un array de 12 elementos, donde cada elemento audios sale del Id del html.
    const audios = Array.from({ length: 12 }, (_, i) => document.getElementById(`audio${i + 1}`));

    let current = 0; // Empezamos desde el audio 0.

    //Definimos la funcion que tenemos playNext para que se reproduzca los siguientes audios.
    const playNext = () => {
        if (current < audios.length) { // Comprobamos si quedan audios por reproducir
            audios[current].play(); // Empezamos a reproducir audios.
            audios[current].addEventListener('ended', () => { // Añadimos un event listener para cuando terminen los audios.
                current++; // Aumentamos la variable let con el valor current para que siga con la siguiente.
                playNext(); // Llamamos al valor PlayNext.
            }, { once: true }); // El event listener solo se ejecuta una vez.
        }
    };

    playNext(); // Empezamos con el primer audios que tenemos en HTML.
}
=======
function throwConfetti() {
    confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.7 },
        colors: ['#040404', '#880FD6', 'F02FD5'],  // Negro, lila, Rosa.
        shapes: ['circle', 'square']           // Formas de los confetis
    });
}
document.getElementById('confettiButton').onclick = throwConfetti; // Con el valor documento.getEementbyId metemos el elemento id para hacer que el js cuando apretemos al boton salten confetis.

function playSequence() {
    // Creamos un array de 12 elementos, donde cada elemento audios sale del Id del html.
    const audios = Array.from({ length: 12 }, (_, i) => document.getElementById(`audio${i + 1}`));

    let current = 0; // Empezamos desde el audio 0.

    //Definimos la funcion que tenemos playNext para que se reproduzca los siguientes audios.
    const playNext = () => {
        if (current < audios.length) { // Comprobamos si quedan audios por reproducir
            audios[current].play(); // Empezamos a reproducir audios.
            audios[current].addEventListener('ended', () => { // Añadimos un event listener para cuando terminen los audios.
                current++; // Aumentamos la variable let con el valor current para que siga con la siguiente.
                playNext(); // Llamamos al valor PlayNext.
            }, { once: true }); // El event listener solo se ejecuta una vez.
        }
    };

    playNext(); // Empezamos con el primer audios que tenemos en HTML.
}
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
