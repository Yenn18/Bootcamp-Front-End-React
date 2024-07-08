import { BiEditAlt } from "react-icons/bi"; 
import { VscClose } from "react-icons/vsc";

export default function BookItem(){
    return(
        <div>
            <h1>El perfume</h1>
            <span>patrick suskind</span>
            <button> novela</button>
            <button><BiEditAlt /></button>
            <button><VscClose /></button>
            <p>19.9€</p>
        </div>
    )
}