import { Routes, Route } from 'react-router-dom';
import HeaderApp from './components/Header.tsx';
import FooterApp from "../components/Footer"
import Home from "./pages/Home.tsx";
import LogIn from "./pages/LogIn.tsx";
import Register from "./pages/Register.tsx";
import AddBook from "./pages/AddBook.tsx";
import EditBook from "./pages/EditBook.tsx";
import Profile from "./pages/profile.tsx";
import Libros from "./pages/Libros.tsx";
import './index.css';

function App() {
  return (
    <div className="flex-col min-h-screen">
       <HeaderApp />
      <main className='flex flex-col grow w-3/4 max-w-4xl mx-auto my-20'>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logIn" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/addBook" element={<AddBook />} />
              <Route path="/editBook" element={<EditBook />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/libros" element={<Libros />} />
          </Routes>
      </main>
      <FooterApp></FooterApp>
    </div>
  )
}

export default App
