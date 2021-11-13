import { useContext } from "react";
import VariableContext from "../../context/VariableContext";
import {
  titleHandler,
  contentHandler,
  addNewBookHandler,
} from "./AddNewBookHelper";

const AddNewBookForm = ({ newPostUrl }) => {
  const {
    setShowBookList,
    title,
    setTitle,
    content,
    setContent,
    setShowBookId,
  } = useContext(VariableContext);

  return (
    <form
      action=""
      onSubmit={(e) =>
        addNewBookHandler(
          e,
          title,
          content,
          newPostUrl,
          setShowBookList,
          setShowBookId
        )
      }
    >
      <h3>Add new book</h3>
      <label htmlFor="">Title:</label>
      <input
        type="text"
        name="title"
        onChange={(e) => titleHandler(e, setTitle)}
      />
      <label htmlFor="">Content:</label>
      <textarea
        type="text"
        name="content"
        rows="4"
        cols="14"
        onChange={(e) => contentHandler(e, setContent)}
      />
      <button type="text">Add New Book</button>
    </form>
  );
};

export default AddNewBookForm;
