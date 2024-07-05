import Title from './components/title';
import About from './pages/About';
import Blog from './pages/Blog';
import NormaClassFor from './components/NormaClassFor';
import NormasBasicas from './components/Normasbasicas';
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
      <About></About>
      <Blog> </Blog>


      <input type="text" />
      <section>
        <article>Ir al hospital</article>
        <article>Ir a comprar</article>
      </section>

    </main>
  )
}
export default App