import { useContext } from "react";
import VariableContext from "../../context/VariableContext";
import { idHandler, submitIdHandler } from "./searchByIdHelper";

const SearchByIdForm = () => {
  const { setShowBookList, bookId, setBookId, setBookByIdData, setShowBookId } =
    useContext(VariableContext);

  return (
    <form
      action=""
      onSubmit={(e) =>
        submitIdHandler(
          e,
          bookId,
          setBookByIdData,
          setShowBookList,
          setShowBookId,
          setBookId
        )
      }
    >
      <h3>Search by ID</h3>
      <label htmlFor="">ID: </label>
      <input
        type="text"
        onChange={(e) => idHandler(e, setBookId)}
        value={bookId}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchByIdForm;
