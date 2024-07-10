
type Props = {
    position?: 'horizontal' | 'vertical';
  }
  
 export default function MenuApp({ position }: Props) {
  
    const positionWindows = position === 'horizontal' ? 'flex-col' : '';
    return (
        <> 
        <nav className= {`${positionWindows} flex mr-auto gap-4  p-6 border border-violet-200 *:text-black *:text-2xl *:md:text-xxl shadow-2xl rounded `}>
            <a className="px-1" href="/">Home</a>
            <a className="px-1" href="/Libros">Libros</a>
            <a className="px-1" href="/LogIn">LogIn</a>
        </nav> 
        </>
    )
}