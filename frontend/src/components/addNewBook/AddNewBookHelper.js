export const titleHandler = (e, setTitle) => setTitle(e.target.value);

export const contentHandler = (e, setContent) => setContent(e.target.value);

export const addNewBookHandler = (
  e,
  title,
  content,
  newPostUrl,
  setShowBookList,
  setShowBookId
) => {
  e.preventDefault();

  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, content: content }),
  };

  fetch(newPostUrl, requestOption).then((response) => response.json());
  setShowBookList(true);
  setShowBookId(false);
};
