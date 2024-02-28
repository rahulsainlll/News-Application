const dotenv = require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");

// middlware
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

const {
  getNews,
  getNewsById,
  postNews,
  updateNewsById,
  deleteNewsById,
} = require("../controller/newsController");

router.get("/news", getNews);
router.get("/news/:id", getNewsById);
router.post("/news", postNews);
router.put("/news/:id", updateNewsById);
router.delete("/news/:id", deleteNewsById);

module.exports = router;


