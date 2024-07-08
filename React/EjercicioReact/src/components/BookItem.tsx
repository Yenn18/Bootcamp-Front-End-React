import { BiEditAlt } from "react-icons/bi"; 
import { VscClose } from "react-icons/vsc";
import BookPage from "../pages/BooksPage";
import styles from "./myCss.module.css";

console.log(styles);

function BookItem(){

    return(
        <div className={styles.container}>
        <BookPage>
        </BookPage>
            <h1 className={styles.title}>El Perfume</h1>
            <span className={styles.author}>Patrick suskind</span>
            <button className={styles.btn}>Novela</button>
            <button className={styles.buttonIcon} ><BiEditAlt /></button>
            <button className={styles.buttonIcon1} ><VscClose /></button>
            <p>19.9€</p>
        </div>
    )
}

export default BookItem;