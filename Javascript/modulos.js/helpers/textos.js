<<<<<<< HEAD
export function capitalizeWords (text = '') {
    if (typeof text !== 'string') return '';
  
    const words = text.split(' ');
    const capitalizedWords = [];
  
    for (const word of words) {
      const capitalizeWord = word.slice(0, 1).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizeWord);
    }
  
    return capitalizedWords.join(' ');
  }
  
  export default function reverseText (text) {
    return text.split('').reverse().join('');
  }
  
  
  
  // export default reverseText;
=======
export function capitalizeWords (text = '') {
    if (typeof text !== 'string') return '';
  
    const words = text.split(' ');
    const capitalizedWords = [];
  
    for (const word of words) {
      const capitalizeWord = word.slice(0, 1).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizeWord);
    }
  
    return capitalizedWords.join(' ');
  }
  
  export default function reverseText (text) {
    return text.split('').reverse().join('');
  }
  
  
  
  // export default reverseText;
>>>>>>> 651e694dbadce7ff45e2963fd1f619852e58a3b6
  // export { capitalizeWords };