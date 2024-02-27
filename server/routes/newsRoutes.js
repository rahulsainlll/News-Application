const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
  getNews,
  getNewsById,
  postNews,
  updateNewsById,
  deleteNewsById,
} = require("../controller/newsController");

router.get("/news", getNews);
router.get("/news/id", getNewsById);
router.post("/news", postNews);
router.put("/news/id", updateNewsById);
router.delete("/news/id", deleteNewsById);

module.exports = router;

// Cors add
