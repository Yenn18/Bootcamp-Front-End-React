import Title from './components/title';
import NormaClassFor from './components/normaClassFor';
import NormasBasicas from './components/normasbasicas';
import NormasCierraEtiqueta from './components/NormaCierreEtiquetas';
import NormaEventos from './components/NormasEventos';
import './App.css'

function App() {
  return (
    <main>

      <Title></Title>
      <NormasBasicas />
      <NormaClassFor />
      <NormasCierraEtiqueta /> 
      <NormaEventos></NormaEventos>


      <input type="text" />
      <section>
        <article>Ir al hospital</article>
        <article>Ir a comprar</article>
      </section>

    </main>
  )
}
export default App