import { BiEditAlt } from "react-icons/bi"; 
import { VscTrash } from "react-icons/vsc";
import styles from "./myCss.module.css";
import { CgBorderStyleSolid } from "react-icons/cg";


function BookItem(){
    return (
        <> 
        <div className={styles.img}>
                <img src="/El perfume.jpg" width={270} height={290} alt="El perfume" />
             <div className={styles.title}>
                <span>El Perfume</span>
                </div>
             <div className={styles.container}>
                <span className={styles.author}>Patrick Suskind</span>
                <span className={styles.button}>Novela</span>
             </div>
                <div className={styles.price}>
                <span>19.9€</span>
                </div>
                <div className={styles.container1}>
                    <button className={styles.button1}><BiEditAlt /></button>
                    <button className={styles.button2}><VscTrash /></button>
                </div>
        </div>
     </>
    );
}

export default BookItem;
