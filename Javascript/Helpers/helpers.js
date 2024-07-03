<<<<<<< HEAD
function capitalizarWords (text = ''){
    const words = text.slice(' ');
    const capitalizarWord = [];

    for (const word of words) {
        const capitalizarWord = word.slice(0,1).toUpperCase() + word.slice(1);
        capitalizarWord.push(capitalizarWord)
    }
    return capitalizarWord.join(' ');
}
=======
function capitalizarWords (text = ''){
    const words = text.slice(' ');
    const capitalizarWord = [];

    for (const word of words) {
        const capitalizarWord = word.slice(0,1).toUpperCase() + word.slice(1);
        capitalizarWord.push(capitalizarWord)
    }
    return capitalizarWord.join(' ');
}
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
console.log(capitalizarWord());