import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
export default function FooterApp (){
    return(
        <>
        <nav>
            <a href="https://es-es.facebook.com/"><BsFacebook /></a>
            <a href="https://www.instagram.com/"><AiOutlineInstagram /></a>
            <a href="https://www.linkedin.com/"><AiFillLinkedin /></a>
        </nav>   
        
        </>
    )
}