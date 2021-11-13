const express = require("express");
const router = express.Router();
const dataPosts = require("../data/dataposts");

//! Task 4 (1): GET --------------------------
router.get("/posts", (req, res) => {
  return res.status(200).json(dataPosts);
});

//! Task 4(2): POST --------------------------
router.post("/newpost", (req, res) => {
  const idArray = dataPosts.map((data) => data.id);
  const maxIdNum = Math.max.apply(Math, idArray);

  const newPost = {
    id: maxIdNum + 1,
    title: req.body.title,
    content: req.body.content,
  };

  dataPosts.push(newPost);
  return res.status(200).json({ message: "New post is add", posts: dataPosts });
});

//! Bonus 1. ---------------------------------
router.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const getDataByID = dataPosts.find((data) => data.id == id);
  return res.status(200).json(getDataByID);
});

//! Bonus 2. ---------------------------------
router.delete("/posts/delete/:id", (req, res) => {
  const id = req.params.id;
  const book = dataPosts.find((data) => data.id == id);
  let index = dataPosts.indexOf(book);
  dataPosts.splice(index, 1);
  return res.status(200).json(dataPosts);
});

//! Bonus 3. --------------------------------
router.put("/posts/update/:id", (req, res) => {
  const id = req.params.id;
  const book = dataPosts.find((data) => data.id == id);
  book.title = req.body.title;
  book.content = req.body.content;
  return res.status(200).json(dataPosts);
});

module.exports = router;
