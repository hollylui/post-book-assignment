export const editTitleHandler = (e, setEditTitle) => {
  setEditTitle(e.target.value);
};

export const editContentHandler = (e, setEditContent) => {
  setEditContent(e.target.value);
};

export const handleClose = (setShow) => setShow(false);

export const editBookHandler = (
  setShow,
  editId,
  editTitle,
  editContent,
  setBookList
) => {
  setShow(false);

  const url = `http://localhost:4000/post/posts/update/${editId}`;
  const requestOption = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: editTitle, content: editContent }),
  };

  fetch(url, requestOption)
    .then((response) => response.json())
    .then((data) => setBookList(data));
};
