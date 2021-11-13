import { useEffect, useContext } from "react";
import VariableContext from "../../context/VariableContext";

import { showBook } from "./BookListHelper";
import BookContent from "./BookContent";

const BookList = () => {
  const { setBookList, setShowBookList } = useContext(VariableContext);

  // uesEffect ----------------------------
  useEffect(() => showBook(setBookList, setShowBookList), []);

  return (
    <div className="bookList">
      <div className="bookListContainer">
        <BookContent />
      </div>
    </div>
  );
};

export default BookList;
