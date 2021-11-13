const axios = require("axios");

// show book list ----------------

export const showBook = async (setBookList, setShowBookList) => {
  const url = "http://localhost:4000/post/posts";

  const bookData = await axios.get(url);
  setBookList(bookData.data);
  setShowBookList(true);
};

// delete book --------------------
export const deleteBook = (e, setBookList, setShowBookList, setShowBookId) => {
  const deleteBookId = e.target.getAttribute("value");
  const url = `http://localhost:4000/post/posts/delete/${deleteBookId}`;

  const requestOption = {
    method: "DELETE",
  };

  fetch(url, requestOption)
    .then((response) => response.json())
    .then((data) => setBookList(data));

  setShowBookList(true);
  setShowBookId(false);
};

//Edit book -----------------------

export const showEdit = (e, setShow, setEditId) => {
  setShow(true);
  setEditId(e.target.getAttribute("value"));
};
