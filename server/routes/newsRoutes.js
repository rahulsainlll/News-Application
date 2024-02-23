const express = require("express");
const router = express.Router();
const cors = require("cors");

const { getNews } = require("../controller/newsController");

router.get("/post", getNews);

module.exports = router;
