
export default function NormaClassFor () {
    return <>

        <h2 className="bg-red-200">titulo con clases</h2>
        <label htmlFor="name"> Nombre:</label>
        <input id="name" type="text" placeholder="Nombre..." />
    </>
}

// no se puede utilizar class, es lo lee, tiene que utilizar ClassName
// ni tampoco for en label esta reservado para el bucle for