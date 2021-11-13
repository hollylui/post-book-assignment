import { useContext } from "react";
import VariableContext from "../../context/VariableContext";

const ShowBookByIdData = () => {
  const { bookByIdData } = useContext(VariableContext);
  return (
    <div className="bookList">
      <div className="book">
        <div className="number">No. {bookByIdData.id}</div>
        <div>
          <span>Title: </span>
          {bookByIdData.title}
        </div>
        <div>
          <span>Content:</span>
          {bookByIdData.content}
        </div>
      </div>
    </div>
  );
};

export default ShowBookByIdData;
