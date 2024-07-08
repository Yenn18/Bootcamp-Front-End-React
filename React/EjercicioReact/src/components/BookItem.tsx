import { BiEditAlt } from "react-icons/bi"; 
import { VscTrash } from "react-icons/vsc";
import BookPage from "../pages/BooksPage";
import styles from "./myCss.module.css";

function BookItem(){
    return (
        <div className={styles.container}>
            <BookPage />
            <h1 className={styles.title}>El Perfume</h1>
            <span className={styles.author}>Patrick Suskind</span>
            <button className={styles.btn}>Novela</button>
            <p className={styles.price}>19.9€</p>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonIcon} ><BiEditAlt /></button>
                <button className={styles.buttonIcon1} ><VscTrash /></button>
            </div>
        </div>
    );
}

export default BookItem;
