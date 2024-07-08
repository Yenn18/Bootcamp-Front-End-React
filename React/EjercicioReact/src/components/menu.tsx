import LogoMenu from "./LogoMenu"


export default function MenuApp() {
return(
    <>  
    <div> 
        <LogoMenu></LogoMenu>
        <nav>
            <a href="/">Home</a>
            <a href="/Libros">Libros</a>
            <a href="/LogIn">LogIn</a>
        </nav>
    </div>
    </>
)
}