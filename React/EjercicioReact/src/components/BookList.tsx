import books from "../config/fakebook";
import BookItem from "./BookItem";

function BookList() {
  
    return (
      <section>
        {
          books.map(book => <BookItem key={book.id} book={book} />)
        }
      </section>
    )
}
export default BookList;