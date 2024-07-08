import MybuttonLinks from './pages/About.tsx';
import HeaderApp from './components/Header.tsx';
import BooksPage from './pages/BooksPage.tsx';


function App() {
  return (
    <>   
    <main>
        <HeaderApp />

        <h1>Proyecto</h1>
        
        <MybuttonLinks></MybuttonLinks>
     

      <BooksPage></BooksPage>
      </main>
    </>
  )
}

export default App
