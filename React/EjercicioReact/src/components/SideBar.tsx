import { TiDeleteOutline } from "react-icons/ti"; 
import Menu from './menu'

type Props = {
    Cloopesidebar: () => void;

}

export default function Sidebar (props: Props){
    return (
        <div className="fixed inset-0 bg-gradient-to-r from-purple-300 to-violet-700 z-10 grid place-content-center">
            <button onClick={props.Cloopesidebar}><TiDeleteOutline className="absolute top-5 left-10" size={50} color="black"/></button>
            <Menu position="horizontal"></Menu>
        </div>
    )
}