import MybuttonLinks from './pages/About.tsx';
import HeaderApp from './components/Header.tsx';
import BooksPage from './pages/BooksPage.tsx'
import './index.css';

function App() {
  return (

      <main>
        <HeaderApp />
        <MybuttonLinks></MybuttonLinks>
         <BooksPage></BooksPage>
      </main>
  )
}

export default App
