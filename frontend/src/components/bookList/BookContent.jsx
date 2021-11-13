import { useContext } from "react";
import VariableContext from "../../context/VariableContext";
import editImage from "../../assets/images/bookList/write.png";
import { deleteBook, showEdit } from "./BookListHelper";

const BookContent = () => {
  const {
    bookList,
    setBookList,
    setShowBookList,
    setShowBookId,
    setShow,
    setEditId,
  } = useContext(VariableContext);
  return (
    <>
      {bookList.map((book, index) => {
        return (
          <div key={book.id} className="book">
            <div className="modify">
              <img
                src={editImage}
                alt="edit"
                onClick={(e) => showEdit(e, setShow, setEditId)}
                value={book.id}
              />

              <div
                onClick={(e) =>
                  deleteBook(e, setBookList, setShowBookList, setShowBookId)
                }
                className="deleteButton"
                value={book.id}
              >
                &#x24E7;
              </div>
            </div>
            <div className="number">No. {book.id}</div>
            <div>
              <span>Title:</span> {book.title}
            </div>

            <div>
              <span>Content:</span> {book.content}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookContent;
