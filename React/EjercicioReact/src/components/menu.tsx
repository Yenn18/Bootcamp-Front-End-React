import LogoMenu from "./LogoMenu"


export default function MenuApp() {
return(
    <> 
        <nav className="flex">
            <LogoMenu />
            <a className="px-1" href="/">Home</a>
            <a className="px-1" href="/Libros">Libros</a>
            <a className="px-1" href="/LogIn">LogIn</a>
        </nav> 
    </>
)
}