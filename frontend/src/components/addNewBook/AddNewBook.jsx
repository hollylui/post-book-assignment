import AddNewBookForm from "./AddNewBookForm";

const AddNewBook = () => {
  //! url ---------------------------------------------------
  const newPostUrl = "http://localhost:4000/post/newpost";

  //! rendering -----------------------------------------
  return (
    <div className="formArea">
      <AddNewBookForm newPostUrl={newPostUrl} />
    </div>
  );
};

export default AddNewBook;
