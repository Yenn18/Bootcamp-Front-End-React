import MybuttonLinks from './pages/About.tsx';
import HeaderApp from './components/Header.tsx';
import BookItem from './components/BookItem.tsx';
import './index.css';

function App() {
  return (

      <main>
        <HeaderApp />
        <MybuttonLinks></MybuttonLinks>
        <BookItem />

      </main>
  )
}

export default App
