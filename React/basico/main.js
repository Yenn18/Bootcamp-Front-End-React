

// con este ejemplo gracias a poner los script

console.log(React);
console.log(ReactDOM);

const rootDiv = document.getElementById('root');

//Crear un elemento del DOM de forma nativa.
const h2Nativo = document.createElement('h2');
h2Nativo.className = 'text-blue-200';   
h2Nativo.id = 'titulo';
h2Nativo.innerHTML = 'Soy un h2';


console.log('NATIVO ->', h2Nativo);
rootDiv.append(h2Nativo);


// crear un elemento del Dom con React

const h2React = React.createElement(
    'h2', 
    {
        className: 'text-blue-200', 
        id: 'titulo'
    }, 
    'soy un H2 de react');

    console.log('REACT ->', h2React);

    rootDiv.append(h2React); // esto no funciona, no es un objecto del dom

// para meter en el dom algo en react, necesitamos decirle que reacrdom cual es la raiz para nuestro app es decir donde va a inyectar todo

const root = ReactDOM.createRoot(rootDiv);
root.render(h2React);