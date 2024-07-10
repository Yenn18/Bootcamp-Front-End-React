import LogoApp from "./Logo.tsx"
import MenuApp from "./menu.tsx"
import LogoMenu from "./LogoMenu.tsx"
import Sidebar from "./SideBar.tsx";
import { useState } from "react";



export default function HeaderApp (){
    
    const [OpenCloseSidebar, setIsOpenCloseSidebar] = useState(false);
    
    function Cloopesidebar  () {
        setIsOpenCloseSidebar(!OpenCloseSidebar);
    }
    return (
        <>   
            <div className="bg-violet-500 px-4 py-4 items-center hidden md:flex text-lg lg:text-center"> 
                <MenuApp />
                  <LogoApp />
                <h2 className=" text-3xl font-bold mr-8">BOOSKSTORE</h2>
            </div>
                {OpenCloseSidebar && <Sidebar Cloopesidebar={Cloopesidebar} />}
            <div className=" hidden sm:flex text-xl xl:text-base bg-violet-500 px-4 py-4 item-start md:hidden">
                <button onClick={Cloopesidebar} className="md:hidden">
                    <LogoMenu />
                </button>

            </div>
            
        </>
    )
}
