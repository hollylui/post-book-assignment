import "./assets/sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AddNewBook from "./components/addNewBook/AddNewBook";
import BookList from "./components/bookList/BookList";
import VariableContext from "./context/VariableContext";
import SearchById from "./components/searchBookById/SearchById";
import ShowBookByIdData from "./components/searchBookById/ShowBookByIdData";
import EditModal from "./components/editBook/EditModal";

function App() {
  const [bookList, setBookList] = useState([]);
  // const [newBookList, setNewBookList] = useState(bookList);
  const [showBookList, setShowBookList] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bookId, setBookId] = useState("");
  const [bookByIdData, setBookByIdData] = useState("");
  const [showBookId, setShowBookId] = useState(false);

  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const [show, setShow] = useState(false);

  const props = {
    bookList,
    setBookList,
    showBookList,
    setShowBookList,
    title,
    setTitle,
    content,
    setContent,
    bookId,
    setBookId,
    bookByIdData,
    setBookByIdData,
    showBookId,
    setShowBookId,

    show,
    setShow,

    editId,
    setEditId,
    editTitle,
    setEditTitle,
    editContent,
    setEditContent,
  };

  return (
    <VariableContext.Provider value={{ ...props }}>
      <div className="App">
        <h1>Book List</h1>
        <div className="inputForm">
          <AddNewBook />
          <SearchById />
          <EditModal />
        </div>
        {showBookId && <ShowBookByIdData />}
        {showBookList && <BookList />}
      </div>
    </VariableContext.Provider>
  );
}

export default App;
