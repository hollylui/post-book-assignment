//! Setup ----------------------------------------
const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const { PORT: port } = process.env;

const postsRoute = require("../routes/postsRoute");
const cors = require("cors");

//! app -----------------------------------------
app.use(cors());
app.use(express.json());
app.use("/post", postsRoute);
app.listen(port, () => console.log("Server is listening."));
