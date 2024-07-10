import LogoApp from "./Logo.tsx"
import MenuApp from "./menu.tsx"

export default function HeaderApp (){

    return (
        <>   
            <div className="bg-violet-500 px-4 py-4 flex items-center"> 
                <MenuApp />
                  <LogoApp /> 
                <h2 className=" text-4xl font-bold ">BOOSKSTORE</h2>
            </div>
            
            
        </>
    )
}