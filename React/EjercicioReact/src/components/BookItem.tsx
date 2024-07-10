import { BiEditAlt } from "react-icons/bi"; 
import { VscTrash } from "react-icons/vsc";
import styles from "./myCss.module.css";
import { MyBook } from "../config/types"


type Props = {
   book: MyBook
};
const handleEditButtton = (booktitle:string) => {
   console.log(`Estás editando el libro: ${booktitle}`);
 };

 const handleDeleteButtton = (booktitle:string) => {
   console.log(`Estás borrando el libro: ${booktitle}`);
 };

function BookItem(props: Props){
   const { book } = props;

    return (
        <> 
        <div className={styles.row}>
                <img src={book.photo} alt={`Portada ${book.title}`} />
             <div className={styles.book}>
                <span className={styles.title}>{book.title}</span>
                </div>
             <div className={styles.row}>
                <span className={styles.author}>{book.author}</span>
                <span className={styles.button}>{book.type}</span>
             </div>
                <div className={styles.row}>
                <span>${book.price}€</span>
                </div>
                <div className={styles.container1}>
                <button className={styles.button1} onClick={() => handleEditButtton(book.title)}>
                   <BiEditAlt />
               </button>
               <button className={styles.button2} onClick={() => handleDeleteButtton(book.title)}>
                   <VscTrash />
               </button>
               </div>
        </div>
     </>
    );
}


export default BookItem;
