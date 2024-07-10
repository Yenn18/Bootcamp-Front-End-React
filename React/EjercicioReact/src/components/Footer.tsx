import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
export default function FooterApp (){
    return(
        <>
        <div className="bg-violet-500 px-4 py-4 ">
            <nav className="flex gap-5 items-end">
             <a href="https://es-es.facebook.com/"  target= "_blank"  rel= "nooperner noreferer"><BsFacebook /></a>
                <a href="https://www.instagram.com/" target= "_blank"  rel="nooperner noreferer"><AiOutlineInstagram /></a>
                <a href="https://www.linkedin.com/" target= "_blank" rel="nooperner noreferer" ><AiFillLinkedin /></a>
         </nav>   
        </div>
        </>
    )
}