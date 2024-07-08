import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
export default function FooterApp (){
    return(
        <>
        <nav>
            <a href="https://es-es.facebook.com/"  target= "_blank"  rel= ""><BsFacebook /></a>
            <a href="https://www.instagram.com/" target= "_blank"  rel="nooder"><AiOutlineInstagram /></a>
            <a href="https://www.linkedin.com/" target= "_blank" rel="nooder" ><AiFillLinkedin /></a>
        </nav>   
        
        </>
    )
}