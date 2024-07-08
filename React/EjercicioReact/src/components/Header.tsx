import LogoApp from "./Logo.tsx"
import MenuApp from "./menu.tsx"

export default function HeaderApp (){

    return (
        <>  
           
            <MenuApp /> 
            <div> 
                  <LogoApp /> 
                <h2>Encabezado</h2>
            </div>
            
          
        </>
    )
}