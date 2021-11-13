const axios = require("axios");

export const idHandler = (e, setBookId) => {
  setBookId(e.target.value);
};

export const submitIdHandler = async (
  e,
  bookId,
  setBookByIdData,
  setShowBookList,
  setShowBookId,
  setBookId
) => {
  e.preventDefault();
  const url = `http://localhost:4000/post/posts/${bookId}`;

  const bookIdData = await axios.get(url);
  setBookByIdData(bookIdData.data);
  setShowBookList(false);
  setShowBookId(true);
  setBookId("");
};
