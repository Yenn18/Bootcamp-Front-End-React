import MybuttonLinks from './pages/About.tsx';
import HeaderApp from './components/Header.tsx';
import BooksPage from './pages/BooksPage.tsx'
import './index.css';

function App() {
  return (
    <div className="flex-col min-h-screen">
       <HeaderApp />
      <main className="grow w-3/4 max-w-4xl mx-auto my-20">
         <BooksPage></BooksPage>
      </main>
      <main className='flex flex-col'>
      <MybuttonLinks></MybuttonLinks>

      </main>
    </div>
  )
}

export default App
