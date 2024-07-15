import { NavLink } from 'react-router-dom';


type Props = {
    position?: 'horizontal' | 'vertical';
  }
  
 export default function MenuApp({ position }: Props) {
  
    const positionWindows = position === 'horizontal' ? 'flex-col' : '';
    const user = null;
    return (

        <nav className= {`${positionWindows} flex mr-auto gap-4  p-6 border border-violet-200 *:text-black *:text-2xl *:md:text-xxl shadow-2xl rounded `}>
                <NavLink to="/">Home</NavLink>
            {user ? (
            <>
                <NavLink to="/libros">Libros</NavLink>
                <NavLink to="/profile">Perfil</NavLink>
                <NavLink to="/add-Book">Añadir Libro</NavLink>
                <NavLink to="/edit-Book">Editar Libro</NavLink>
            </>
            ) : (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/register">Registrate</NavLink>
            </>
            )}
        </nav>

    )
}