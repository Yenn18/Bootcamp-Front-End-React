import MybuttonLinks from './pages/About.tsx';
import HeaderApp from './components/Header.tsx';
import BookItem from './components/BookItem.tsx';

function App() {
  return (
    <>   
    <main>
        <HeaderApp />

        <h1>Proyecto</h1>
        
        <MybuttonLinks></MybuttonLinks>
     <BookItem />
      </main>
    </>
  )
}

export default App
